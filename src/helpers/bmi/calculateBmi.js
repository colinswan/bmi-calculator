/**
 * Calculate BMI based on the unit, weight and height
 * @param {string} unit - The unit of measurement
 * @param {number} weight - The weight
 * @param {number} height - The height
 * @returns {number} The calculated BMI
 * @example
 * calculateBmi("metric", 68, 180) // 21.0
 *
 */
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
