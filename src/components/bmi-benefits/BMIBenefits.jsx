//  Describes the benefits of healthy eating, regular exercise, and adequate sleep.
import "./BMIBenefits.css";

import { TbSalad } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";

function BMIBenefits() {
  const benefits = [
    {
      id: 1,
      icon: <TbSalad />,
      title: "Healthy Eating",
      description:
        "Healthy eating promotes wight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      id: 2,
      icon: <FaRunning />,
      title: "Regular Exercise",
      description:
        "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      id: 3,
      icon: <GiNightSleep />,
      title: "Adequate Sleep",
      description:
        "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ];
  return (
    <div className="bmi__benefits-container">
      {benefits.map((benefit) => (
        <div key={benefit.id} className="bmi__benefit">
          <div className={`bmi__benefit-icon icon-${benefit.id}`}>
            {benefit.icon}
          </div>
          <div className="bmi__benefit-title">{benefit.title}</div>
          <div className="bmi__benefit-description">{benefit.description}</div>
        </div>
      ))}
    </div>
  );
}

export default BMIBenefits;
