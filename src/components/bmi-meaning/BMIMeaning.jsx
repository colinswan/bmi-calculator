//  Explains what the BMI means.
import HealthyImage from "../healthy-image/HealthyImage";
import "./BMIMeaning.css";

function BMIMeaning() {
  return (
    <>
      <div className="bmi-meaning">
        <div className="health__image-container">
          <HealthyImage />
        </div>
        <div className="bmi__meaning-container">
          <h2>What your BMI result means</h2>

          <p>
            Body Mass Index (BMI) is a numerical value derived from your weight
            and height. Its a common indicator to categorize your body size.
            Underweight is a BMI less than 18.5. Normal weight ranges from 18.5
            to 24.9. Overweight is from 25 to 29.9, and 30 or above is
            considered obese. To maintain a healthy BMI, its recommended to
            engage in regular physical activity and follow a balanced diet rich
            in fruits, vegetables, lean proteins, and whole grains.
          </p>
        </div>
      </div>
    </>
  );
}

export default BMIMeaning;
