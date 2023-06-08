// Declaring a Type object to use dataTypes inside react component through TSX
// Naming convention rules:
// Always name your typeOBJECT in CamelCase cases
// Use descriptive naming convetions to hgelp you out :)
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
  // Arrayof Objects Type
  amazingMcs: {
    first: string;
    last: string;
    age: number;
  }[];
  // Array of Strings Type
  coolCities: string[];
};

// SYNTAX USED TO DECLARE PROPS THROUGH A "STRUCTURED MANNER"
export const PropTypes = (props: LetsLearnTsProps) => {
  return (
    <div className="border">
      <h5>Prop Types</h5>
      {/* String Prop Type */}
      <h4>
        Hello my name is {props.name} - This is a string prop type set up using
        react.
      </h4>
      {/* Number prop type */}
      <h4>I am {props.myAge} year's old</h4>
      {/* Boolean prop type */}
      {props.likesPineapplePizza
        ? `I see that ${props.name} likes to eat pineapple pizza`
        : `${props.name} does not like pineapple pizza because he is ${props.myAge}`}
      {/* Object prop type */}
      <div>
        <h4>
          {props.masterOfCeremony.first} {props.masterOfCeremony.last} is
          {props.name} current favorite MC - Master of Ceremony. He is currently
          {props.masterOfCeremony.age} years old.
        </h4>
      </div>
      {/* Array of Objects prop type */}
      <div>
        <h4>This is a list of cool MC's - using an array of objects</h4>
        <ul>
          {props.amazingMcs.map((mc) => {
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
          {props.coolCities.map((city) => {
            return <li key={city}>{city}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
