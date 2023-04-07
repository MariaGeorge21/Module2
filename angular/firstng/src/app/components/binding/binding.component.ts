import { Component, OnChanges, OnDestroy, OnInit , SimpleChanges} from '@angular/core';
import { item } from 'src/app/model/item';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit, OnDestroy,OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('from ..ngOnchanges');
    //throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('from ..ngOnDestroy');
    //throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    console.log('from ..ngOnInit');
    //throw new Error('Method not implemented.');
  }
  
  productId:number=127676;
  description="Apple mac book-Retina eye"
  qty:number=0;
  price:number=170000.00;
  available:string='green';
  delivery:string='red';
  orderedQty:number=0;
  items : item[]=[
    new item(1,'iphone14','smart phone',78000,2),
    new item(2,'Samsung Galaxy','Smart phone',35000,13),
    new item(3,'OnePlus+11','adv smart phone',110000,10)];
  takeOrder():
    void{
      console.log('place order');

    }
   isMember = false;
   isQtyAvailable=this.qty>0; 
  
  products = [
    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];



}
