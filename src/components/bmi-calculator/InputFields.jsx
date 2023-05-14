export function InputFields({
  unit,
  height,
  weight,
  onHeightChange,
  onWeightChange,
}) {
  return (
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
            onChange={(e) => onHeightChange(e.target.value)}
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
            onChange={(e) => onWeightChange(e.target.value)}
          />
          <span>{unit === "metric" ? "kg" : "pounds"}</span>
        </div>
      </div>
    </div>
  );
}
