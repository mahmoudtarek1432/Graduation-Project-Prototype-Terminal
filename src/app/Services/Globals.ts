import { Injectable } from "@angular/core";

import { BehaviorSubject, observable, Observable } from "rxjs";
import { Category } from "../models/Category";
import { MenuItem } from "../models/MenuItem";

@Injectable()
export class globlas{

    cart = new BehaviorSubject<MenuItem[]>([]);
    categories = new BehaviorSubject<Category[]>([]);
    table:number = 0;
    baseUrl:string = "http://172.20.10.2:84/api/"

    castCart = this.cart.asObservable();
    castCategory = this.categories.asObservable();

    updateCart(item:MenuItem){
        this.cart.value.push(item)
        this.cart.next(this.cart.value)
    }

    updateCategory(cat :Category[]){
        this.categories.next(cat)
    }

    deletefromCart(items:MenuItem[]){
        this.cart.next(items)
    }
}