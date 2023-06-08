type LetsLearnTsProps = {
  // String Type
  name: string;
  // Number Type
  myAge: number;
  // Boolean Type
  likesPineapplePizza: boolean;
  // Object Type
  masterOfCeremony: {
    first: string;
    last: string;
    age: number;
  };
  // Array opf Objects Type - Most Commonly Used through JSON format on backends :)
  // By structuring the syntax in this way, the amazingMcs property represents an array of objects, where each object contains information about an MC (Master of Ceremony).
  amazingMcs: {
    first: string;
    last: string;
    age: number;
  }[];
  // Array of Strings Type
  coolCities: string[];
};

// Destructure the properties directly in the function signature
const DestructuredPropTypes = ({
  name,
  myAge,
  likesPineapplePizza,
  masterOfCeremony,
  amazingMcs,
  coolCities,
}: LetsLearnTsProps) => {
  return (
    <div className="border">
      <h5>Destructured Prop Types</h5>
      {/* String prop type */}
      <h4>
        Hello my name is {name} - This is a string prop type set up in React
      </h4>
      {/* Number prop type */}
      <h4>I am {myAge} years old</h4>
      {/* Boolean prop type */}
      <div>
        {likesPineapplePizza
          ? `I see that ${name} likes pineapple pizza`
          : `${name} does not like pineapple pizza because he is ${myAge}`}
      </div>
      {/* Object prop type */}
      <div>
        <h4>
          {masterOfCeremony.first} {masterOfCeremony.last} is {name}'s current
          favorite MC - Master of Ceremony. He is currently{" "}
          {masterOfCeremony.age} years old.
        </h4>
      </div>
      {/* Array prop type */}
      <div>
        <h4>This is a list of cool MC's - using an array of objects</h4>
        <ul>
          {amazingMcs.map((mc) => {
            return (
              <li key={mc.first}>
                {mc.first} {mc.last}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Array of Strings prop type */}
      <div>
        <h4>This is a list of cool Cities - using an array of strings</h4>
        <ul>
          {coolCities.map((city) => {
            return <li key={city}>{city}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DestructuredPropTypes;
