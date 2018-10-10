import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get(this.API + '/Product');
  }

  getCountry(): Observable<any> {
    return this.http.get(this.API + '/Country');
  }

  getClassification(): Observable<any> {
    return this.http.get(this.API + '/Classification');
  }
  getTypes(): Observable<any> {
    return this.http.get(this.API + '/Type');
  }
  //update typeSelect 
  public putClassificationTypeName(productSelect:string,typeSelect:string):Observable<any>{
    return this.http.put(this.API + '/Classification/TypeName/'+productSelect+'/'+typeSelect,{
      "productName":productSelect,
      "typeName":typeSelect,
    });
  }
  //update classSelect
  public putClassificationClassName(productSelect:string,classSelect:string):Observable<any>{
    return this.http.put(this.API + '/Classification/ClassName/'+productSelect+'/'+classSelect,{
      "productName":productSelect,
      "className":classSelect,
    });
  }
  //update countrySelect
  public putClassificationCountryName(productSelect:string,countrySelect:string):Observable<any>{
    return this.http.put(this.API + '/Classification/CountryName/'+productSelect+'/'+countrySelect,{
      "productName":productSelect,
      "countryName":countrySelect
    });
  }
  //update classification 4 item
  public putClassificationAll(productSelect:string,classSelect:string,typeSelect:string,countrySelect:string):Observable<any>{
    return this.http.put(this.API + '/Classification/'+productSelect+'/'+classSelect+'/'+typeSelect+'/'+countrySelect,{
      "productName":productSelect,
      "className":classSelect,
      "typeName":typeSelect,
      "countryName":countrySelect
    });
  }

  addClassification(inputClass:string){
    return this.http.post(this.API + '/Classification/addClassification/'+inputClass,{
      "className":inputClass,
    });
  }
  addType(inputType:string){
    return this.http.post(this.API + '/Type/addType/'+inputType,{
      "className":inputType,
    });
  }
  addCountry(inputCountry:string){
    return this.http.post(this.API + '/Country/addCountry/'+inputCountry,{
      "className":inputCountry,
    });
  }
}
