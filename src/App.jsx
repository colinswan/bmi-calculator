// App.js
import Header from "./components/header/Header";

import BMIMeaning from "./components/bmi-meaning/BMIMeaning";
import BMIBenefits from "./components/bmi-benefits/BMIBenefits";
import Limitations from "./components/bmi-limitations/Limitations";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BMIMeaning />
      <BMIBenefits />
      <Limitations />
    </div>
  );
}

export default App;
