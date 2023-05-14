// Explains the limitations of BMI calculations.
import "./Limitations.css";

import { FaTransgender } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { MdPregnantWoman } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

function Limitations() {
  const limitations = [
    {
      id: 1,
      icon: <FaTransgender />,
      title: "Gender",
      description:
        "The development and body fat composition of girls and body vary with age. Consequently, a childs age and gender are considered when evaluating BMI.",
    },
    {
      id: 2,
      icon: <FaBirthdayCake />,
      title: "Age",
      description:
        "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    },
    {
      id: 3,
      icon: <GiMuscleUp />,
      title: "Muscle",
      description:
        "BMI may misclassify muscular individuals as overweight or obese, as it does not differentiate muscle.",
    },
    {
      id: 4,
      icon: <MdPregnantWoman />,
      title: "Pregnancy",
      description:
        "Expectant mother experience weight gain due to their growing baby. Maintaining a healthy pregnancy BMI is advisable to minimize health risks for both mother and child.",
    },
    {
      id: 5,
      icon: <IoIosPeople />,
      title: "Race",
      description:
        "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, is it advised to discuss this with your GP or practice nurse",
    },
  ];
  return (
    <div className="bmi__limitations">
      <div className="bmi__limitations-text">
        <h1>Limitations of BMI</h1>
        <p>Explanation of the limitations of the BMI calculation</p>
      </div>

      <div className="bmi__limitations-cards">
        {limitations.map((limitation) => (
          <div key={limitation.id} className="bmi__limitations-card">
            <div className="bmi__limitations-card-icon">
              <div className="bmi__limitation-category">
                <span
                  role="img"
                  aria-label={limitation.title}
                  className={`limitations-icon-${limitation.id}`}
                >
                  {limitation.icon}
                </span>
                <h3>{limitation.title}</h3>
              </div>

              <p>{limitation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Limitations;
