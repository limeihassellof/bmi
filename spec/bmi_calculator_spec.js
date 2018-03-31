describe("BMICalculator", function() {
  var bmi_calculator;
  var person;

  beforeEach(function() {

    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    person = new Person({weight: 90, height: 186});
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });
  it("calculates BMI for a person using imperial method", function() {
    person = new Person({weight:127.87, height:63.38});
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(22.38);
  });
});
