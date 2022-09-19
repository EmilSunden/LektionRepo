const prompt = require('prompt-sync')()


const kokboken = prompt(`Välkommen till kokboken välj ett alternativ med siffrorna: 
1. Koka Snabbmakroner 
2. ***inte klart***
3. ***inte klart***
0. för att avbryta: `);

switch(kokboken){
    case "1" : kokaMaks();
    break;

    case "2" : kokaMaks();
    break;

    case "3" : kokaMaks();
    break;

    case "4" : break;
}


function kokaMaks(){
    const portioner = prompt("Hur många portioner snabbmakaroner vill du göra? --> "); // hur många portioner i en prompt
//console.log(portioner)
    let liter = portioner * 0.5;
    let pasta = portioner * 2;
    let salt = portioner * 0.5; 
console.log(`\nDu har valt att göra ${portioner} portioner med pasta,
\ndu behöver fylla en kastrull med ca: ${liter} l vatten, 
tillsätt ${salt} tsk salt, vänta tills vattnet kokar och häll sedan
i ${pasta} dl pasta och vänta ca 3 min, häll av i ett durkslag och servera, 
bon apitit!`);
}


//kokaMaks()