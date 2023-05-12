export const toMetricHeight = (heightInInches) => {
  return (heightInInches * 2.54).toFixed(1);
};

export const toMetricWeight = (weightInPounds) => {
  return (weightInPounds * 0.453592).toFixed(1);
};

export const toImperialHeight = (heightInCm) => {
  return (heightInCm * 0.393701).toFixed(1);
};

export const toImperialWeight = (weightInKg) => {
  return (weightInKg * 2.20462).toFixed(2);
};
