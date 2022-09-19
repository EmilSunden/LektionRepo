const prompt = require('prompt-sync')();

// Till 1 dl pasta behöver du + snabbMakaronerGramPerDl + "g"

let makaronerGram = 50
let makaronerDeciliterPerPortion = 50 * 0.02


let makaronerLagning = () => {
    consent = prompt("Först och främst: Känner du för pasta idag? ");
    if (consent !== "ja") {
        console.log("Okej bai! ")
    } else {
        console.log("Great! ")
    }

    antalPortion = prompt("Då fortsätter vi! Hur många portioner pasta vill du ha? ")
    while (antalPortion !== "1" && antalPortion !== "2" && antalPortion !== "3"){
        if (antalPortion !== "1" && antalPortion !== "2" && antalPortion !== "3"){
            antalPortion = prompt("Not allowed! ")
            } else if (antalPortion === "1"){
                console.log(`Till en portion behöver du ${makaronerGram} gram snabbmakaroner vilket är ${makaronerDeciliterPerPortion} deciliter`)
            } else if (antalPortion === "2"){
                console.log(`Till två portioner behöver du ${makaronerGram * 2} gram snabbmakaroner vilket är ${makaronerDeciliterPerPortion * 2} deciliter`)
            } else if (antalPortion === "3"){
                console.log(`Till tre portioner behöver du ${makaronerGram * 3} gram snabbmakaroner vilket är ${makaronerDeciliterPerPortion * 3} deciliter`)
            } else {
                break;
            }
        
        }
    };
makaronerLagning()