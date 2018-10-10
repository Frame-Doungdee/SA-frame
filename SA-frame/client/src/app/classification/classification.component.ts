import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassificationService} from '../shared/classification/classification.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
export interface PeriodicElement {
  productId: number;
  productName: string;
  classification:string;
  country:string;
  type:string;
}
@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {
  productSelect:string = ''; classSelect:string = ''; typeSelect:string = ''; countrySelect:string = '';
  inputClass:string = ''; inputCountry:string = ''; inputType:string = '';
  products: Array<any>;
  countrys: Array<any>;
  classifications: Array<any>;
  types: Array<any>;
  dataSource:any;
  displayedColumns: string[] = ['productId', 'productName', 'classification', 'country','type'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private classificationService: ClassificationService) { }
ngOnInit() {
      this.getProductList();
      this.getClassificationList();
      this.getCountryList();
      this.getTypeList();
  }
  //------------Load data -------------
  getProductList(){
    this.classificationService.getProduct().subscribe(data => {
      this.products = data;
      const productList: PeriodicElement[] = [];
      console.log(this.products);
      for (let index = 0; index < this.products["length"]; index++) {
        productList.push({
          productId: this.products[index].productId,
          productName: this.products[index].productName,
          classification: this.products[index].classification.className,
          country: this.products[index].country.countryName,
          type: this.products[index].type.typeName,
        })
      }  
      //console.log('productList[0].type =  : '+productList[0].type); 
      this.dataSource = new MatTableDataSource(productList);
      this.dataSource.paginator = this.paginator;
    });
  }  
  getTypeList(){
    this.classificationService.getTypes().subscribe(data => {

      this.types = data;
      console.log(this.types);
    });
  }

  getCountryList(){
    this.classificationService.getCountry().subscribe(data => {
      this.countrys = data;
      console.log(this.countrys);
    });
  }

  getClassificationList(){
    this.classificationService.getClassification().subscribe(data => {
      this.classifications = data;
      console.log(this.classifications);
    });
  }
//------------------------------------------------------------------------------------------------------

  updateProduct(){
    if(this.productSelect == ''){
      alert("กรุณากรอกชื่อสินค้าด้วยครับ");
    }
    else if(this.productSelect != '' && this.typeSelect != '' && this.classSelect == '' && this.countrySelect == ''){
      this.classificationService.putClassificationTypeName(this.productSelect,this.typeSelect).subscribe(
        data => {
          alert("จัดหมวดหมู่แล้ว");
          console.log('update Success');
          this.productSelect = '';
          this.typeSelect = '';
          this.getProductList();
      },
        error => {
          alert("การจัดหมวดหมู่เกิดข้อผิดพลาด");
          console.log("Error", error);
        }
      );
    }
    else if(this.productSelect != '' && this.classSelect != '' && this.countrySelect == '' && this.typeSelect == ''){
      this.classificationService.putClassificationClassName(this.productSelect,this.classSelect).subscribe(
        data => {
          alert("จัดหมวดหมู่แล้ว");
          console.log('update Success');
          this.productSelect = '';
          this.classSelect = '';
          this.getProductList();
      },
        error => {
          alert("การจัดหมวดหมู่เกิดข้อผิดพลาด");
          console.log("Error", error);
        }
      );
    }
    else if(this.productSelect != '' && this.countrySelect != '' && this.typeSelect =='' && this.classSelect == ''){
      this.classificationService.putClassificationCountryName(this.productSelect,this.countrySelect).subscribe(
        data => {
          alert("จัดหมวดหมู่แล้ว");
          console.log('update Success');
          this.productSelect = '';
          this.countrySelect = '';
          this.getProductList();
      },
        error => {
          alert("การจัดหมวดหมู่เกิดข้อผิดพลาด");
          console.log("Error", error);
        }
      );
    }
    else if(this.productSelect != '' && this.typeSelect != '' && this.classSelect != '' && this.countrySelect == ''){
      
    }
    else if(this.productSelect != '' && this.typeSelect != '' && this.countrySelect != '' && this.classSelect == ''){

    }
    else if(this.productSelect != '' && this.classSelect != '' && this.countrySelect != '' && this.typeSelect == ''){

    }
    else{
      //put
      this.classificationService.putClassificationAll(this.productSelect,this.classSelect,this.typeSelect,this.countrySelect).subscribe(
        data => {
          alert("จัดหมวดหมู่แล้ว");
          console.log('update Success');
          this.productSelect = '';
          this.classSelect = '';
          this.typeSelect = '';
          this.countrySelect = '';
          this.getProductList();
      },
        error => {
          alert("hello");
          console.log("Error", error);
        }
      );
        console.log('Product : ' +this.productSelect);
        console.log('classification : ' +this.classSelect);
        console.log('type : '+this.typeSelect);
        console.log('country : '+this.countrySelect);
    }
  }

  addClassification(){
    if(this.isThai(this.inputClass) || this.isClassificationDuplicate(this.inputClass)){
      if(this.isThai(this.inputClass))
        alert("กรุณาป้อนข้อมูลเป็นภาษาไทย");
      else if(this.isClassificationDuplicate(this.inputClass))
        alert("้เกิดข้อผิดพลาด ท่านกรอกข้อมูลซ้ำ");
        this.inputClass = '';
    }
    else{
      this.classificationService.addClassification(this.inputClass).subscribe(
      data => {
        alert("เพิ่ม "+this.inputClass+" แล้ว");
        console.log("POST Request is successful ", data);
        this.getClassificationList();
        this.inputClass = '';
      },
      error => {
        alert("การเพิ่มข้อมูลเกิดข้อผิดพลาด");
        console.log("Error", error);
      }
    );
    }
    
  }
  addType(){
    //console.log(this.isTypeDuplicate(this.inputType));
    console.log(this.isThai(this.inputType));
    if(this.isThai(this.inputType) || this.isTypeDuplicate(this.inputType)){
      if(this.isThai(this.inputType))
        alert("กรุณาป้อนข้อมูลเป็นภาษาไทย");
      if(this.isTypeDuplicate(this.inputType))
        alert("้เกิดข้อผิดพลาด ท่านกรอกข้อมูลซ้ำ");
        this.inputType = '';
    }
  else{
    this.classificationService.addType(this.inputType).subscribe(
      data => {
        alert("เพิ่ม "+this.inputType+" แล้ว");
        console.log("POST Request is successful ", data);
        this.getTypeList();
        this.inputType = '';
      },
      error => {
        alert("การเพิ่มข้อมูลเกิดข้อผิดพลาด");
        console.log("Error", error);
      }
    );
  }
}

  isThai(x:string):boolean {
    for(let i = 0;i<x["length"];i++){
      if( x.charAt(i) < 'ก') //ascii = 161
        return true;
    }
    return false;
  }
  isTypeDuplicate(x:string):boolean{
    for(let i = 0;i<this.types["length"] ;i++){
      let y = new String(this.types[i].typeName);
      let index = y.localeCompare(x); 
      if(index == 0)
        return true;
    }
    return false;
  }
  isClassificationDuplicate(x:string):boolean{
    for(let i = 0;i<this.classifications["length"] ;i++){
      let y = new String(this.classifications[i].className);
      let index = y.localeCompare(x); 
      if(index == 0)
        return true;
    }
    return false;
  }
}