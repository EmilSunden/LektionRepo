const prompt = require('prompt-sync')();

const songLyric = () => {
    let lyric = prompt("His palms are sweaty, knees weak, arms are: ");
    while (lyric !== "heavy" ){
        if (lyric !== "heavy"){
            lyric = prompt("That's not the right word I'm looking for! Try again: ");
        } else {
            console.log("That's exactly the word I'm looking for! ");
            break;   
        }
    };

    let momsWhat = prompt("There's vomit on his sweater already, mom's: ")
    while (momsWhat !== "spaghetti"){
        if (momsWhat !== "spaghetti" ){
            momsWhat = prompt("That's definetly not the right word! Try again: ")
        } else {
            console.log(`Moms ${momsWhat} indeed!`)
            break;
        }
    }
};
songLyric()