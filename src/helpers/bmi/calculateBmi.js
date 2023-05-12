export const calculateBmi = (unit, weight, height) => {
  let calculatedBmi;

  if (unit === "metric") {
    calculatedBmi = Number(
      (weight / ((height / 100) * (height / 100))).toFixed(1)
    );
  } else {
    calculatedBmi = Number(((703 * weight) / (height * height)).toFixed(1));
  }

  return calculatedBmi;
};
