class Employee{
    private readonly empno:number;
   // private empno:number;
    private ename:string;
    private sal:number;
    private attendence:any;
public getEmpno():number{
    return this.empno;
}
public getEmpname():String{
    return this.ename;
}
public getSal():number{
    return this.sal;
}
public getAttendence():String{
    return this.attendence;
}
// constructor()
// {
// this.empno=101;
// this.ename="abc";
// this.sal=20000;
// this.attendence=18;
// }
constructor(empno:number,ename:string,sal:number,attendence:any){
    this.empno=empno;
    this.ename=ename;
    this.sal=sal;
    this.attendence=attendence;
}


print():void{
    console.log(this.ename,this.ename,this.sal,this.attendence);
}
}

// var emp =new Employee();
// var emp1=new Employee();
// emp1.empno=102;
// var emp2=new Employee();
// emp2.empno=103;
// emp.print();
// emp1.print();
// emp2.print();

var emp =new Employee(1,'abc',3000,20);
var emp1=new Employee(2,'bbc',2000,30);
//emp1.empno=102;
var emp2=new Employee(3,'cde',3500,25);
//emp2.empno=103;
emp.print();
emp1.print();
emp2.print();

class Employee1
{
    private fname:string;
    private mname!:string;
    private lname:string;
    constructor(fname:string,mname:string,lname:string){
        this.fname=fname;
        this.mname=mname;
        this.lname=lname;
    }
    getMname():string{
        return this.mname;
    }
}
let e1 =new Employee1('a','b','c');
console.log(e1.getMname());
var emparray :Employee[] =[emp,emp1,emp2];
emparray.forEach(element => {
    console.log(element);
});

