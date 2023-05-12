import { useState, useEffect } from "react";
import "./BMICalculator.css";
import { calculateBmi } from "../helpers/bmi/calculateBmi";
import { calculateIdealWeight } from "../helpers/bmi/calculateIdealWeight";
import { getBmiMessage } from "../helpers/bmi/bmiMessage";
import {
  toMetricHeight,
  toMetricWeight,
  toImperialHeight,
  toImperialWeight,
} from "../helpers/convertMeasurements";

function BMICalculator() {
  const [unit, setUnit] = useState("metric");
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(0);
  const [idealWeight, setIdealWeight] = useState([0, 0]);
  const [message, setMessage] = useState("");

  const handleMetric = () => {
    if (unit === "imperial") {
      setHeight((prevHeight) => toMetricHeight(prevHeight));
      setWeight((prevWeight) => toMetricWeight(prevWeight));
    }
    setUnit("metric");
  };

  const handleImperial = () => {
    if (unit === "metric") {
      setHeight((prevHeight) => toImperialHeight(prevHeight));
      setWeight((prevWeight) => toImperialWeight(prevWeight));
    }
    setUnit("imperial");
  };

  useEffect(() => {
    const calculatedBmi = calculateBmi(unit, weight, height);
    const idealWeightRange = calculateIdealWeight(unit, height);

    setBmi(calculatedBmi);
    setIdealWeight(idealWeightRange);
    setMessage(getBmiMessage(calculatedBmi));
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
