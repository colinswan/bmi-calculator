/**
 * Calculates the ideal weight range based on the user's height and unit.
 * @param {string} unit - The unit of measurement
 * @param {number} height - The height
 * @returns {array} The ideal weight range
 * @example
 * calculateIdealWeight("metric", 180) //  [59.9, 80.7]
 * calculateIdealWeight("imperial", 70) // [ 128.9, 173.5]
 */
export const calculateIdealWeight = (unit, height) => {
  let idealWeightRange;

  /**This formula applies when the height is given in centimeters (cm). The ideal weight range is calculated based on the height in meters (m) using the BMI (Body Mass Index) thresholds of 18.5 and 24.9. */
  if (unit === "metric") {
    idealWeightRange = [
      Number((18.5 * (height / 100) * (height / 100)).toFixed(1)),
      Number((24.9 * (height / 100) * (height / 100)).toFixed(1)),
    ];
    console.log(idealWeightRange);
  } else {
    /**When the unit is set to "imperial," the formula adjusts for the height in inches (in) and converts it to meters */
    const heightInMeters = height * 0.0254;

    idealWeightRange = [
      Number(
        ((18.5 * (heightInMeters * heightInMeters)) / 0.453592).toFixed(1)
      ),
      Number(
        ((24.9 * (heightInMeters * heightInMeters)) / 0.453592).toFixed(1)
      ),
    ];
    console.log(idealWeightRange);
  }

  return idealWeightRange;
};
