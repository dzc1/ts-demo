import "./App.css";
import { TsJsExplanation } from "./components/explanation/TsJsExplanation";
import { TsConversion } from "./components/explanation/TsConversion";
import { PropTypes } from "./components/Examples/PropTypes";
import DestructuredPropTypes from "./components/Examples/DestructuredPropTypes";

function App() {
  // Object Definition Here in parent component
  const favoriteMc = {
    first: "J",
    last: "Cole",
    age: 35,
  };

  // Array of Objects Defined here
  const greatMcs = [
    {
      first: "Andree",
      last: "3000",
      age: 45,
    },
    {
      first: "Mos",
      last: "Def",
      age: 35,
    },
    {
      first: "Jay",
      last: "Z",
      age: 35,
    },
  ];
  // Array of Strings Here
  const cities = ["Stockholm", "Barcelona", "Miami", "Kyoto"];

  return (
    <div className="border">
      <h4>Lets Learn TS - Typescript</h4>
      {/* Explanations */}
      {/* <TsJsExplanation /> */}
      {/* <TsConversion /> */}

      {/* Let's Learn about propTypes with react components */}
      <PropTypes
        name="Diego Zito"
        myAge={32}
        likesPineapplePizza={false}
        masterOfCeremony={favoriteMc}
        amazingMcs={greatMcs}
        coolCities={cities}
      />
      <DestructuredPropTypes
        name="Diego Zito"
        myAge={32}
        likesPineapplePizza={false}
        masterOfCeremony={favoriteMc}
        amazingMcs={greatMcs}
        coolCities={cities}
      />
    </div>
  );
}

export default App;
