import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { MenuItem } from '../models/MenuItem';
import { globlas } from '../Services/Globals';
import { MenuService } from '../Services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: Category[] = [];
  timeinterval:any;
  constructor(private menuService:MenuService, private globals: globlas) { 
    menuService.getCategories().subscribe(result=> this.categories = result)
    globals.castCategory.subscribe(result => this.categories = result)
  }

  ngOnInit(): void {
  }

  addToCart(item:MenuItem){
    console.log("saw")
    this.globals.updateCart(item)
  }
}
