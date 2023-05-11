import { useState, useEffect } from "react";

import "./BMICalculator.css";
function BMICalculator() {
  const [unit, setUnit] = useState("metric");
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(0);
  const [idealWeight, setIdealWeight] = useState([0, 0]);
  const [message, setMessage] = useState("");

  const handleMetric = () => {
    if (unit === "imperial") {
      // Convert height from inches to cm (1 inch = 2.54 cm)
      setHeight((prevHeight) => (prevHeight * 2.54).toFixed(1));
      // Convert weight from lbs to kg (1 lb = 0.453592 kg)
      setWeight((prevWeight) => (prevWeight * 0.453592).toFixed(1));
    }
    setUnit("metric");
  };

  const handleImperial = () => {
    if (unit === "metric") {
      setHeight((prevHeight) => (prevHeight * 0.393701).toFixed(1));
      setWeight((prevWeight) => (prevWeight * 2.20462).toFixed(2));
    }
    setUnit("imperial");
  };

  useEffect(() => {
    let calculatedBmi;

    if (unit === "metric") {
      calculatedBmi = Number(
        (weight / ((height / 100) * (height / 100))).toFixed(1)
      );
    } else {
      calculatedBmi = Number(((703 * weight) / (height * height)).toFixed(1));
    }

    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) {
      setMessage(
        "You BMI suggest are underweight. Your ideal weight is between"
      );
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      setMessage(
        "Your BMI suggests you are a healthy weight. Your ideal weight is between"
      );
      if (unit === "metric") {
        setIdealWeight([
          Number((18.5 * (height / 100) * (height / 100)).toFixed(1)),
          Number((24.9 * (height / 100) * (height / 100)).toFixed(1)),
        ]);
      } else {
        const heightInMeters = height * 0.0254;

        setIdealWeight([
          Number(
            ((18.5 * (heightInMeters * heightInMeters)) / 0.453592).toFixed(1)
          ),
          Number(
            ((24.9 * (heightInMeters * heightInMeters)) / 0.453592).toFixed(1)
          ),
        ]);
      }
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      setMessage(
        "Your BMI suggest you are overweight. Your ideal weight is between"
      );
      setIdealWeight([
        Number((18.5 * (height / 100) * (height / 100)).toFixed(1)),
        Number((24.9 * (height / 100) * (height / 100)).toFixed(1)),
      ]);
    } else {
      setMessage(
        "Your BMI suggest you are obese. Your ideal weight is between"
      );
      setIdealWeight([
        Number((18.5 * (height / 100) * (height / 100)).toFixed(1)),
        Number((24.9 * (height / 100) * (height / 100)).toFixed(1)),
      ]);
    }
  }, [height, weight, unit]);

  return (
    <div className="bmi__calculator">
      <h2>Enter your details below</h2>
      <div className="unit__selector">
        <div className="input-field">
          <label>
            <input
              type="radio"
              name="unit"
              value={unit}
              checked={unit === "metric"}
              onChange={handleMetric}
            />
            Metric
          </label>
        </div>
        <div className="input-field">
          <label>
            <input
              type="radio"
              name={unit}
              value="imperial"
              checked={unit === "imperial"}
              onChange={handleImperial}
            />{" "}
            Imperial
          </label>
        </div>
      </div>
      <div className="input-fields">
        <div className="input-field">
          <label className="measurement__label" htmlFor="height">
            Height
          </label>
          <div className="input-container">
            <input
              type="number"
              name="height"
              value={height}
              required
              id="height"
              placeholder="0"
              onChange={(e) => setHeight(e.target.value)}
            />
            <span>{unit === "metric" ? "cm" : "inches"}</span>
          </div>
        </div>
        <div className="input-field">
          <label className="measurement__label" htmlFor="weight">
            Weight
          </label>
          <div className="input-container">
            <input
              type="number"
              required
              value={weight}
              name="weight"
              id="weight"
              placeholder="0"
              onChange={(e) => setWeight(e.target.value)}
            />
            <span>{unit === "metric" ? "kg" : "pounds"}</span>
          </div>
        </div>
      </div>

      <div className="result__container">
        {!bmi ? (
          <>
            <h3>Welcome!</h3>
            <p>
              Enter your height and weight and you will see your BMI results
              here
            </p>
          </>
        ) : (
          <div className="bmi__message-container">
            <div className="bmi__score">
              <h3>Your BMI is...</h3>
              <h1>{bmi}</h1>
            </div>
            <div className="bmi__message">
              <p>
                {message}{" "}
                <span>
                  {idealWeight[0]} - {idealWeight[1]}{" "}
                  {unit === "metric" ? "kg" : "lbs"}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
