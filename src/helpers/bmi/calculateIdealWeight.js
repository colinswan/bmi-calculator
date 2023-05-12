export const calculateIdealWeight = (unit, height) => {
  let idealWeightRange;

  if (unit === "metric") {
    idealWeightRange = [
      Number((18.5 * (height / 100) * (height / 100)).toFixed(1)),
      Number((24.9 * (height / 100) * (height / 100)).toFixed(1)),
    ];
  } else {
    const heightInMeters = height * 0.0254;

    idealWeightRange = [
      Number(
        ((18.5 * (heightInMeters * heightInMeters)) / 0.453592).toFixed(1)
      ),
      Number(
        ((24.9 * (heightInMeters * heightInMeters)) / 0.453592).toFixed(1)
      ),
    ];
  }

  return idealWeightRange;
};
