/**
 * Converts height from inches to metric units (centimeters).
 * @param {number} heightInInches - The height in inches.
 * @returns {string} The converted height in centimeters.
 */
export const toMetricHeight = (heightInInches) => {
  return (heightInInches * 2.54).toFixed(1);
};

/**
 * Converts weight from pounds to metric units (kilograms).
 * @param {number} weightInPounds - The weight in pounds.
 * @returns {string} The converted weight in kilograms.
 * @example
 * toMetricWeight(150) // 68.0
 */
export const toMetricWeight = (weightInPounds) => {
  return (weightInPounds * 0.453592).toFixed(1);
};

/**
 * Converts height from centimeters to imperial units (inches).
 * @param {number} heightInCm - The height in centimeters.
 * @returns {string} The converted height in inches.
 * @example
 * toImperialHeight(180) // 70.9
 */
export const toImperialHeight = (heightInCm) => {
  return (heightInCm * 0.393701).toFixed(1);
};

/**
 * Converts weight from kilograms to imperial units (pounds).
 * @param {number} weightInKg - The weight in kilograms.
 * @returns {string} The converted weight in pounds.
 * @example
 * toImperialWeight(68) // 150.0
 */
export const toImperialWeight = (weightInKg) => {
  return (weightInKg * 2.20462).toFixed(2);
};
