import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{

  startNewOrder:boolean = true;
  isInputFieldEmpty: boolean = true;

  flag: string = 'pizza';

  orderModel:any;
  date:number = Date.now();
  item_name: string;
  size: string;
  quantity:string;
  itemId:number
  toppings= []
  price:number;
  total: number = 0.00;

  animal: string;
  name: string;

  order:any;

  showWell:boolean = false;
  mockData:boolean = false;

  i:number = 0;
  constructor(public snackBar: MdSnackBar){
    this.orderModel = 
    {
        "items": [
                {
                    "item_id": 123,
                    "item_name": "Cheese Pizza",
                    "quantity": "2",
                    "size": "slice",
                    "toppings": [ "Tomatos", "Olives", "Spicy" ],
                    "price": 2.99
                },
                {
                    "item_id": 534,
                    "item_name": "Double Cheese Pizza",
                    "quantity": "3",
                    "size": "XL",
                    "toppings": [ "Peppers", "Olives", "Jalapenos" ],
                    "price": 11.99
                }
            ]
    }
    console.log(this.date);
    console.log(JSON.stringify(this.order));

  }

  ngOnInit(){
    for(this.i; this.i < this.orderModel.items.length; this.i++){
      this.total = this.total + this.orderModel.items[this.i].price;
    }
  }

  // HEADER - START ORDER LOGIC
  startOrder(name: string, phone: string) {
    this.startNewOrder = false;
    if (name != undefined && phone != "") {
      this.order= {
      "name": name,
      "phone": phone
      }
    }
    else{
      this.order= {
      "name": name
      }
    }
  }

  // CHECK THE LENGTH OF THE INPUT FIELD
  checkInput(name: string) {
    if ( name.length > 0){
      this.isInputFieldEmpty = false;
    }
    else {
      this.isInputFieldEmpty = true;
    }
    console.log(name)
  }

  // START NEW ORDER FLUSH THE MODEL
  newOrder() {
    this.startNewOrder = !this.startNewOrder;
  }













  passValues(name: string, phone: string) {
    if (name != undefined && phone != "") {
      this.order= {
      "name": name,
      "phone": phone
      }
    }
    else{
      this.order= {
      "name": name
      }
    }
    console.log('Model: ', this.order)
  }

  addPizzaToOrder(item_name:string, key:string){
    this.itemId = 1;
    if (this.itemId == 1){
      this.itemId += 1;
    }
    console.log(key + ' : '+ item_name)
    console.log(this.orderModel)
    
    this.orderModel.order.items.push(
      {
        'item_id': this.itemId,
        'item_name':item_name,
        'size': "",
        'quantity': "",
        'toppings': []
    })
  }
  
  addToOrder(){
    this.itemId = 1;
    if (this.itemId == 1){
      this.itemId += 1;
    }
    
    this.orderModel.items.push(
      {
        'item_id': this.itemId,
        'item_name':this.item_name,
        'size': this.size,
        'quantity': this.quantity,
        'toppings': this.toppings,
        'price': this.price
    })
    this.item_name = "";
    this.size = "";
    this.quantity = "";
    this.toppings = [];
    this.price = null;
    console.log(this.orderModel)
    this.showWell = false;
    this.mockData = false
  }

  setValues(key: string, values: string){
    if(key === "item_name"){
      this.item_name = values;
      this.mockData = true;
    }
    else if(key === "size"){
      this.size = values;
      if(this.size == "Slice"){
        this.price = 2.99;
      }
      else if (this.size == "XL"){
        this.price = 11.99;
      }
    }
    else if(key === "quantity"){
      this.quantity = values;
      this.showWell = true;
    }
    else if(key === "toppings"){
      this.toppings.push(values);
      this.showWell = true;
    }
  }

  
}
