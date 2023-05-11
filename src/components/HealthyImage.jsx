//  Displays the image of a healthy person
import "./HealthyImage.css";
import healthyPerson from "../assets/healthy-person.png";

function HealthyImage() {
  return (
    <div className="person">
      <div className="person__container">
        <div className="person__shape" />
        <img
          className="person__img"
          src={healthyPerson}
          alt="Man sitting at table"
        />
      </div>
    </div>
  );
}

export default HealthyImage;
