import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassificationService} from '../shared/classification/classification.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
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
  productSelect:number = 0 ; classSelect:number = 0; typeSelect:number = 0; countrySelect:number = 0;
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
    let productClassification,productType,productCountry;
    for (let index = 0; index < this.products["length"]; index++) {
      if(this.products[index].classification == null)
         productClassification = "null";
      else
        productClassification = this.products[index].classification.className;
      if (this.products[index].country == null) 
        productCountry = "null";
      else 
        productCountry = this.products[index].country.countryName;
      if(this.products[index].type == null)
        productType = "null"
      else
        productType = this.products[index].type.typeName;
      productList.push({
        productId: this.products[index].productId,
        productName: this.products[index].productName,
        classification: productClassification,
        country: productCountry,
        type: productType,
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
    if(this.productSelect == 0){
      alert("กรุณากรอกชื่อสินค้า");
    }
    else{
      this.classificationService.putClassificationAll(this.productSelect,this.classSelect,this.typeSelect,this.countrySelect).subscribe(
        data => {
          alert("จัดหมวดหมู่แล้ว");
          console.log('update Success');
          this.productSelect = 0;
          this.classSelect = 0;
          this.typeSelect = 0;
          this.countrySelect = 0;
          this.getProductList();
          
      },
        error => {
          alert("จัดหมวดหมู่ล้มเหลว");
          console.log("Error", error);
        }
      );
        console.log('Product : ' +this.productSelect);
        console.log('classification : ' +this.classSelect);
        console.log('type : '+this.typeSelect);
        console.log('country : '+this.countrySelect);
    }
  }

  isClassNameNull(className:string):boolean{
    if(className == ' '){
      return false;
    }
    return true;
    
  }
  //เพิ่มหมวดหมู่
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
  //เพิ่มประเภท
  addType(){
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
  //ค้นหา
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}