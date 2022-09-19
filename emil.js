const prompt = require('prompt-sync')();
/*let snabbMakaronerGramPerDl = 50 
let portioner = 1
// Till 1 dl pasta behöver du + snabbMakaronerGramPerDl + "g"

const kokaMakaroner = () => {
    koka = prompt("Vill du koka pasta? ")

    if (koka !== "ja") {
        console.log("Okej, hejdå! ")
        return
    } else {
        console.log("Bra då kör vi! ")
    }

    let hurMycket = prompt("Hur många deceliter pasta ska vi koka? ")
    if (hurMycket === "1"){
        console.log(`Okej! Då kan följande vara bra att veta: 
${hurMycket} deciliter snabbmakaroner = ${snabbMakaronerGramPerDl} gram `)
    } else if (hurMycket === "2"){
        console.log(`Okej! Då behöver vi ${snabbMakaronerGramPerDl * 2} gram pasta`)
    } else {
        console.log("Biff!")
    }


}
kokaMakaroner()*/



let makaronerGram = 100
let makaronerDeciliter = makaronerGramPerPortion * 


let makaronerLagning = () => {
    consent = prompt("Först och främst: Känner du för pasta idag? ");
    if (consent !== "ja") {
        console.log("Okej bai! ")
    } else {
        antalPortion = prompt("Då fortsätter vi! Hur många portioner pasta vill du ha? ")
    }

   switch (antalPortion){
    case "1":
        console.log("Till en portion behöver du " + makaronerGram + " gram pasta")
    case "2":
        console.log("Till två portioner behöver du ...")
    case "3":
        console.log("Till tre portioner behöver du ...")

   }

};
makaronerLagning()