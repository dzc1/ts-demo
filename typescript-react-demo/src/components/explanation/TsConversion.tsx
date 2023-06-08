export const TsConversion = () => {
  //String Variable
  let string: string = "let’s learn some TypeScript!";
  console.log(string);

  // Number Variable
  let number: number = 25;
  console.log(number);

  // Boolean Variable
  let boolean: boolean = true;
  console.log(boolean);

  // Undefined Variable
  let undefinedVar: undefined;
  console.log(undefinedVar);

  // Null Variable
  let nullVar: null = null;
  console.log(nullVar);

  // Object Variable
  let bandName: {
    name: string;
    country: string;
    members: number;
    genre: string[];
  } = {
    name: "ABBA",
    country: "Sweden",
    members: 4,
    genre: ["disco", "pop", "new wave"],
  };
  console.log(bandName);

  // Array Variable
  let musicEnjoyment: string[] = [
    "I",
    "love",
    "to",
    "jam",
    "to",
    "Kendrick Lamar",
  ];
  console.log(musicEnjoyment[5]);

  // Function Variable
  let outkast: () => void = function () {
    console.log("So fresh, So Clean!");
  };

  // JS Trivial Bug Example
  const infoAboutArtist = (
    artist: string,
    genre: string,
    activeYears: number
  ) =>
    `${artist} is a cool musical artist that makes music under the genre:    ${genre}.
         ${artist} has been making music for about ${activeYears} years.
         In 5 years this artist will be active for ${activeYears + 5} years.`;

  // If we invoke the function in the following manner, we obtain the expected output:
  console.log(infoAboutArtist("Kendrick Lamar", "Hip Hop", 40));

  //However, if by mistake, we pass the function a string as the third parameter, the output obtained will be incorrect:

  // UNcomment Below to check forcer error by passing a sting to a numberType
  //   console.log(infoAboutArtist("Kendrick Lamar", "Hip Hop", "40"));
  console.log(outkast());
  return <div>TsConversion</div>;
};
