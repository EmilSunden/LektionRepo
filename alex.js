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

chef();
