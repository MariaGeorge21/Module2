import { CalculatorService } from "./calculator.service";
describe('calculator service',()=>{
  it('computes factorial of 5 and gives 120',()=>{

  let service=new CalculatorService();
  let result=service.factorial(5);
  expect(result).toBe(120);
});
it('tales base and exponent and returns the power',()=>{
  let service = new CalculatorService();
      let result=service.power(2,5);
      expect(result).toBe(32);

});
});

  