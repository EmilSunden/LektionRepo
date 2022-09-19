const prompt = require('prompt-sync')() // problem med prompt-sync biblioteket, stödjer inte /n newline

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

q = `Välkommen till kokboken välj ett alternativ med siffrorna:
1. Koka Snabbmakroner
2. ***inte klart***
3. ***inte klart***
0. för att avbryta: 
--> `;


//kokboken = prompt(q);

rl.question(q, function(kokboken) {
  

switch(kokboken){
    case "1" : kokaMaks();
    break;

    case "2" : kokaMaks();
    break;

    case "3" : kokaMaks();
    break;

    case "4" : 
    break;
}


function kokaMaks(){
    portioner = prompt("Hur många portioner snabbmakaroner vill du göra? --> ")
    let liter = portioner * 0.5;
    let pasta = portioner * 2;
    let salt = portioner * 0.5; 
console.log(`
Du har valt att göra ${portioner} portioner med pasta,

du behöver fylla en kastrull med ca: ${liter} l vatten, 
tillsätt ${salt} tsk salt, vänta tills vattnet kokar och häll sedan
i ${pasta} dl pasta och vänta ca 3 min, häll av i ett durkslag och servera,
bon apitit!`);

}

rl.close()  // för att stänga readline
});