import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { Order } from '../models/Order';
import { globlas } from './Globals';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public http: HttpClient, public glob: globlas) { }

  getCategories():Observable<Category[]>{

    return this.http.get<Category[]>(this.glob.baseUrl+"Items/GetItems",{withCredentials:false});
  }

  makeOrder(Order:Order):Observable<any>{
    var headers =new HttpHeaders({
      'Access-Control-Allow-Credentials': 'true',
      'withCredentials': 'true'
    })
    console.log(Order)
    return this.http.post(this.glob.baseUrl+"Order/",Order,{headers:headers, withCredentials:false});
  }

  DeleteOrder(OrderId:number):Observable<any>{

    return this.http.delete(this.glob.baseUrl+"Order/"+OrderId,{withCredentials:false});
  }
}
