import { Component, OnInit } from '@angular/core';
import { MatInput} from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { globlas } from '../Services/Globals';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cartItems = this.glob.castCart.subscribe();
  value:any;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private glob:globlas) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(["/menu"],{
      queryParams:{table:this.value}})
    this.glob.table = this.value
  }
}
