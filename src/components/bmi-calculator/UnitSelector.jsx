export function UnitSelector({ unit, handleMetric, handleImperial }) {
  return (
    <div className="unit__selector">
      <div className="input-field">
        <label>
          <input
            type="radio"
            name={unit}
            value={unit}
            checked={unit === "metric"}
            onChange={handleMetric}
          />
          Metric
        </label>
      </div>
      <div className="input-field">
        <label>
          <input
            type="radio"
            name={unit}
            value={unit}
            checked={unit === "imperial"}
            onChange={handleImperial}
          />{" "}
          Imperial
        </label>
      </div>
    </div>
  );
}
