import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  factorial(n:number){
    let fact:any=1;
    for(let i=1;i<=5;i++)
    {
      fact=fact*i;
    }
    return fact;
    
  }
  power(b:number,e:number){
    let result:any=1;
    for(var i=1;i<=e;i++)
    {
      result *=b;
    }
    return result;
  }
}
