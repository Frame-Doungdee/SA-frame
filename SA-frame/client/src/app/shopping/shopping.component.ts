import { Component, OnInit } from '@angular/core';
import { ClassificationService } from '../shared/classification/classification.service';
import { MatTableDataSource } from '@angular/material';
import {PageEvent} from '@angular/material';

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
  products:Array<any>; //source
  dataSource:any;

  
  pageEvent: PageEvent;
  activePageDataChunk = [];
  productList = [];
  pageSize = 4;
  productLength:any;


  constructor(private classificationService: ClassificationService) { }
  ngOnInit() {  
    this.getProductList();
  }

  getProductList(){
    this.classificationService.getProduct().subscribe(data => {
    this.products = data;
    this.activePageDataChunk = this.products.slice(0,this.pageSize);
    this.productLength = this.products.length;
    console.log(data);
    });
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.products.slice(firstCut, secondCut);
  }

  // addToCard(product:any){
  //   this.PreorderService.newPreorder(product.productId,this.username).subscribe(
  //     data => {
  //       alert("สำเร็จ");
  //       console.log("POST Request is successful ", data);
  //     },
  //     error => {
  //       alert("ผิดพลาด");
  //       console.log("Error", error);
  //     }
  //   );
  // }
  
  getProductLength():number{
    return this.productLength;
  }

  setProductLength(num:number){
    this.productLength = num;
  }

  getProduct():Array<any>{
    return this.products;
  }
  
}
