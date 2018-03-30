function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
} // Here we do not need a ; because it's a function declaration and not a statement

// Person.prototype.calculate_bmi = function() {
//   this.bmiValue = 26.01;
//   this.bmiMessage = "Overweight";
// }; // Here we need semi-colon because we are ending a statement (here we do an assignment using =)

if (1 === 1) {
  var one = 1; // Here we need a semi-colon because it's a sattement.
} // Here we do not need semi-colon either, because it's a control flow

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};
