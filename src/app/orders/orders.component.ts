import { Component, OnInit } from '@angular/core';
import { GridColumnStyleBuilder } from '@angular/flex-layout/grid/typings/column/column';
import { MenuItem } from '../models/MenuItem';
import { Order } from '../models/Order';
import { globlas } from '../Services/Globals';
import { MenuService } from '../Services/menu.service';
import { SettingsService } from '../Services/settings.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  table:number = 0;
  totalPrice:number = 0;
  additionalInfo:string = "";
  primaryColor:string='';
  tableItems:MenuItem[] = [
    {
      itemName: "dummy",
      id: "3",
      categoryId: 4,
      quantity: 2,
      price: 22,
      image: "sad",
      description: "asdasdas"
  },
  ]
  constructor(private glob:globlas, set:SettingsService,public  orderSettings: MenuService) { 
    this.table = this.glob.table
    this.tableItems = glob.cart.value;
    this.calculateTotal()
    set.getSettings().subscribe(result=> this.primaryColor = result.primaryColor)
  }
  

  ngOnInit(): void {
  }

  deleteFromList(Id:string){
    var temptable = this.tableItems.filter((e)=> e.id != Id);
    this.tableItems = temptable;
    this.glob.deletefromCart(temptable)
    this.calculateTotal()
  }
  calculateTotal(){
    var sum = 0;
    this.tableItems.forEach((e)=> {
      sum += e.price
    })
    this.totalPrice = sum
  }

  completeOrder(){
    var order:Order = new Order;

    order.Table = this.table
    order.additionalInfo = this.additionalInfo
    order.items = this.tableItems
    console.log(order)
    this.orderSettings.makeOrder(order).subscribe(()=>this.glob.deletefromCart([]));
  }
}
