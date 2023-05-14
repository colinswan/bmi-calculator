import { useState, useEffect } from "react";
import "./BMICalculator.css";
import { calculateBmi } from "../../helpers/bmi/calculateBmi";
import { calculateIdealWeight } from "../../helpers/bmi/calculateIdealWeight";
import { getBmiMessage } from "../../helpers/bmi/bmiMessage";
import { UnitSelector } from "./UnitSelector";
import { InputFields } from "./InputFields";
import { Results } from "./Results";
import {
  toMetricHeight,
  toMetricWeight,
  toImperialHeight,
  toImperialWeight,
} from "../../helpers/convertMeasurements";

function BMICalculator() {
  const [unit, setUnit] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [idealWeight, setIdealWeight] = useState([0, 0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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
    let error = false;
    if (height && weight) {
      if (unit === "metric") {
        if (height < 100 || height > 300) {
          setError("Metric height must be between 100cm and 300cm");
          error = true;
        } else if (weight < 10 || weight > 500) {
          setError("Metric weight must be between 10kg and 500kg");
          error = true;
        }
      } else if (unit === "imperial") {
        if (height < 39.38 || height > 118.1) {
          setError("Imperial height must be between 40 inch and 120 inch");
          error = true;
        } else if (weight < 22 || weight > 1102180) {
          setError("Imperial weight must be between 22lb and 1100lb");
          error = true;
        }
      }

      if (!error && height && weight) {
        const calculatedBmi = calculateBmi(unit, weight, height);
        const idealWeightRange = calculateIdealWeight(unit, height);
        setBmi(calculatedBmi);
        setIdealWeight(idealWeightRange);
        setMessage(getBmiMessage(calculatedBmi));
        setError("");
      } else {
        setBmi(0);
        setIdealWeight([0, 0]);
        setMessage("");
      }
    }
  }, [height, weight, unit]);

  return (
    <div className="bmi__calculator">
      <h2>Enter your details below</h2>
      <UnitSelector
        unit={unit}
        handleMetric={handleMetric}
        handleImperial={handleImperial}
      />
      <InputFields
        unit={unit}
        height={height}
        weight={weight}
        onHeightChange={setHeight}
        onWeightChange={setWeight}
      />
      <Results
        error={error}
        bmi={bmi}
        message={message}
        idealWeight={idealWeight}
        unit={unit}
      />
    </div>
  );
}

export default BMICalculator;
