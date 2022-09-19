const prompt = require("prompt-sync")();
console.log("Alex's App");

function chef() {
  let question = prompt("Want to make some pasta? Y/N -> ").toLowerCase();

  while (question !== "y" && question !== "n") {
    question = prompt("Want to make some pasta? Y/N -> ").toLowerCase();
  }
  if (question == "n") {
    console.log("Leave the kitchen then!");
  } else {
    let portion = prompt("Small or Medium or Large -> ").toLowerCase();
    while (portion !== "small" && portion !== "medium" && portion !== "large") {
      portion = prompt(
        "Please pick one. Small or Medium or Large -> "
      ).toLowerCase();
    }
    makePasta(portion);
  }
}

function makePasta(portion) {
  console.log(`You have chosen ${portion}!`);
  if (portion == "small") {
    console.log("Eat More!");
  } else if (portion == "medium") {
    console.log("A good amount!");
  } else if (portion == "large") {
    console.log("Eat less fatty");
  }
}

function convertTemp(temp) {
  let question = prompt(
    "Do you want to convert from Celcius or Farenheit -> "
  ).toLowerCase();
  if (question == "celcius" || question == "c") {
    let temp = prompt("Enter Celcius temp to convert -> ");
    while (isNaN(temp)) {
      temp = prompt("Farenheit must be number value! -> ");
    }
    convertToFarenheit(temp);
  } else if (question == "farenheit" || question == "f") {
    let temp = prompt("Enter Farenheit temp to convert -> ");
    while (isNaN(temp)) {
      temp = prompt("Celcius must be number value! -> ");
    }
    convertToCelcius(temp);
  }
}

function convertToFarenheit(temp) {
  console.log("----Farenheit hit----");
  let cTemp = temp;
  let newFarenheit = (cTemp * 9) / 5 + 32;
  console.log(`${cTemp}\xB0C converts to ${newFarenheit}\xB0F`);
}

function convertToCelcius(temp) {
  console.log("----Celcius hit----");
  let fTemp = temp;
  let newCelcius = ((fTemp - 32) * 5) / 9;
  let result = Math.round(newCelcius * 100) / 100;

  // console.log(`${fTemp}\xB0F converts to ~ ${newCelcius}\xB0C`);
  console.log(`${fTemp}\xB0F converts to ~ ${result}\xB0C`);
}
// chef();
convertTemp();
