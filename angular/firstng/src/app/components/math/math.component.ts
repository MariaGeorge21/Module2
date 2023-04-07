import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
  n:number=1;
  x:number=1;
  y:number=0;
  a:number=0;
  b:number=0;
  d:number=0;
  f:number=0;
  g:number=0;
  result:number=0;
  Product:number=0;
  result1:number=0;
  Sum:number=0;
  fib:number=0;
  Even:number=0;
factorial(n:number){
  let fact:any=1;
  for(let i=1;i<=n;i++)
  {
    fact=fact*i;
  }
  this.result=fact;
  
}
add(x:number)
{
  let sum=0;
  for(let i=1;i<=x;i++)
  {
       sum=sum+i;
  }
  this.Sum=sum;
}
multiply(y:number,a:number)
{
  let product=0;
  product=y*a;
  this.Product=product;

}
fibinoci(b:number)
{
  let p=0;
  let q=1;
  let c=p+q;
  for(let i=3;i<b;i++)
  {
    p=q;
    q=c;
    c=p+q;

  }
  this.fib=c;

}
even(d:number)
{
  let e=0;
  for(let i=1;i<d;i++)
  {
    
    if(i%2==0)
    {
      e=e+1;
    }
  }
  this.Even=e;
}
divide(f:number,g:number){
  let quotient=0;
  quotient=f/g;
}


}


