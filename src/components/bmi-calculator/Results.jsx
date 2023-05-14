export function Results({ error, bmi, message, idealWeight, unit }) {
  return (
    <div className="result__container">
      {error ? (
        <p>{error}</p>
      ) : bmi && message ? (
        <div className="bmi__message-container">
          <div className="bmi__score">
            <h3>Your BMI is...</h3>
            <h1>{bmi}</h1>
          </div>
          <div className="bmi__message">
            <p>
              {message}{" "}
              <span>
                {idealWeight[0]} - {idealWeight[1]}{" "}
                {unit === "metric" ? "kg" : "lbs"}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <>
          <h3>Welcome!</h3>
          <p>
            Enter your height and weight and you will see your BMI results here
          </p>
        </>
      )}
    </div>
  );
}
