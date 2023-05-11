// Contains the title and description of the BMI.
import BMICalculator from "./BMICalculator";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="bmi__calculator-info">
        <h1>
          <span>Body Mass</span>
          <span>Index Calculator</span>
        </h1>

        <p>
          A BMI calculator is a simple tool that helps users determine their
          Body Mass Index (BMI) by inputting their weight and height. The
          calculator uses a standard formula to evaluate the individuals weight
          status, providing insights into whether they are underweight, normal
          weight, overweight, or obese. This can be a useful starting point for
          understanding ones health and fitness levels.
        </p>
      </div>
      <div className="bmi__calculator-container">
        <BMICalculator />
      </div>
    </div>
  );
}

export default Header;
