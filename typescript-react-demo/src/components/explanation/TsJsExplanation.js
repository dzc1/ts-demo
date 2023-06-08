export const TsJsExplanation = () => {
  //String Variable
  let string = "let’s learn some TypeScript!";
  console.log(string);

  // Number Variable
  let number = 25;
  console.log(number);

  // Boolean Variable
  let boolean = true;
  console.log(boolean);

  // Undefined Variable
  let undefinedVar;
  console.log(undefinedVar);

  // Null Variable
  let nullVar = null;
  console.log(nullVar);

  // Object Variable
  let bandName = {
    name: "ABBA",
    country: "Sweden",
    members: 4,
    genre: ["disco", "pop", "new wave"],
  };
  console.log(bandName);

  // Array Variable
  let musicEnjoyment = ["I", "love", "to", "jam", "to", "Kendrick Lamar"];
  console.log(musicEnjoyment[5]);

  // Function Variable
  let outkast = function () {
    console.log("So fresh, So Clean!");
  };
  console.log(outkast());

  // JS Reassignment Concept
  let myVariable = 10; // myVariable is now a number
  //   myVariable = "I love coding"; // myVariable is now a string
  //   myVariable = true; // myVariable is now a boolean
  console.log(myVariable);

  // JS Trivial Bug Example
  const infoAboutArtist = (artist, genre, activeYears) =>
    `${artist} is a cool musical artist that makes music under the genre:    ${genre}.
           ${artist} has been making music for about ${activeYears} years.
           In 5 years this artist will be active for ${activeYears + 5} years.`;

  // If we invoke the function in the following manner, we obtain the expected output:
  console.log(infoAboutArtist("Kendrick Lamar", "Hip Hop", 40));

  //However, if by mistake, we pass the function a string as the third parameter, the output obtained will be incorrect:
  console.log(infoAboutArtist("Kendrick Lamar", "Hip Hop", "40"));

  return <div>TsJsExplanation</div>;
};
