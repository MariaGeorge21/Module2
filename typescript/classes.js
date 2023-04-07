var Employee = /** @class */ (function () {
    // constructor()
    // {
    // this.empno=101;
    // this.ename="abc";
    // this.sal=20000;
    // this.attendence=18;
    // }
    function Employee(empno, ename, sal, attendence) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendence = attendence;
    }
    Employee.prototype.getEmpno = function () {
        return this.empno;
    };
    Employee.prototype.getEmpname = function () {
        return this.ename;
    };
    Employee.prototype.getSal = function () {
        return this.sal;
    };
    Employee.prototype.getAttendence = function () {
        return this.attendence;
    };
    Employee.prototype.print = function () {
        console.log(this.ename, this.ename, this.sal, this.attendence);
    };
    return Employee;
}());
// var emp =new Employee();
// var emp1=new Employee();
// emp1.empno=102;
// var emp2=new Employee();
// emp2.empno=103;
// emp.print();
// emp1.print();
// emp2.print();
var emp = new Employee(1, 'abc', 3000, 20);
var emp1 = new Employee(2, 'bbc', 2000, 30);
//emp1.empno=102;
var emp2 = new Employee(3, 'cde', 3500, 25);
//emp2.empno=103;
emp.print();
emp1.print();
emp2.print();
var Employee1 = /** @class */ (function () {
    function Employee1(fname, mname, lname) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }
    Employee1.prototype.getMname = function () {
        return this.mname;
    };
    return Employee1;
}());
var e1 = new Employee1('a', 'b', 'c');
console.log(e1.getMname());
