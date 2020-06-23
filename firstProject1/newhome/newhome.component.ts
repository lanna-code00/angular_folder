import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newhome',
  templateUrl: './newhome.component.html',
  styleUrls: ['./newhome.component.css']
})
export class NewhomeComponent implements OnInit {
 
product;
quantity;
price;
public products = [];

  constructor() { }
   
  ngOnInit() {
  }

  addItem() {
    this.products.push({namey: this.product, quan: this.quantity, pri: this.price});
  }

  delete(value) {
    this.products.splice(value, 1);
  }
  
}
