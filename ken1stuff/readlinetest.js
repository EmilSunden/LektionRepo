const readline = require("readline"); // bibliotek readline, självstående
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name ?\n", function(name) {
  console.log(`you said your name is ${name}`);

rl.close()  // för att stänga readline
});
