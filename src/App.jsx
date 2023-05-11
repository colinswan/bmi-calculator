// App.js
import Header from "./components/Header";

import BMIMeaning from "./components/BMIMeaning";
import BMIBenefits from "./components/BMIBenefits";
import Limitations from "./components/Limitations";
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
