import { Component, OnInit } from '@angular/core';
import { ClassificationService } from '../shared/classification/classification.service';
import { MatTableDataSource } from '@angular/material';
export interface PeriodicElement {  
  productId: number;
  productName: string;
  classification:string;
  country:string;
  type:string;
  detail:string;
  price:number;
  imgUrl:string;
}
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  products:any;
  dataSource:any;
  fillter:any;

  constructor(private classificationService: ClassificationService) { }
  ngOnInit() {  
    this.getProductList();
    this.fillter = new MatTableDataSource(this.dataSource);
  }
  getProductList(){
    this.classificationService.getProduct().subscribe(data => {
    this.products = data;
    const productList: PeriodicElement[] = [];
    console.log(this.products);
    let productClassification,productType,productCountry;
    for (let index = 0; index < this.products["length"]; index++) {
      console.log(this.products[index].productImgUrl);
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
        detail:this.products[index].productDetail,
        price:this.products[index].productPrice,
        imgUrl:this.products[index].productImgUrl,
      })
      }  
      //console.log('productList[0].type =  : '+productList[0].type); 
      // this.dataSource = new (productList);
      // this.dataSource.paginator = this.paginator;
    });
  }
  addToCard(product:any){
    console.log(product);
  } 
}
