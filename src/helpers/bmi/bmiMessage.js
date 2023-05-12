export const getBmiMessage = (bmi) => {
  let message;

  if (bmi < 18.5) {
    message = "You BMI suggest are underweight. Your ideal weight is between";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message =
      "Your BMI suggests you are a healthy weight. Your ideal weight is between";
  } else if (bmi >= 25 && bmi <= 29.9) {
    message =
      "Your BMI suggest you are overweight. Your ideal weight is between";
  } else {
    message = "Your BMI suggest you are obese. Your ideal weight is between";
  }

  return message;
};
