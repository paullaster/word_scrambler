/**
 * Create a function that returns a value of a word and scrambles 
 * the letter order with Math.random():
 */
const word_scrambler = (str) => {
    let len = str.length;
    let scrambleValue = '';
    for (let i = 0; i < len; i++) {
        let random = Math.floor (Math.random() * len);
        let removedLetter = str[random];
        if (removedLetter === ' '){
            continue;
        }
        scrambleValue = scrambleValue + removedLetter;
        str = str.substr (0, random) + str.substr (random + 1);
        console.log ('Old string: ' + str + ', new string: ' + scrambleValue);
        len--;
    }
    console.log(scrambleValue)
};
 word_scrambler('this is a word');