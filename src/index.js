const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i+= 10){
        let word = '';
        let decode = expr.slice(i, i + 10);
        if (decode != '**********') +decode;
        while (decode) {
            if (decode % 100 == 10) word += '.';
            if (decode % 100 == 11) word += '-';
            if (decode == '**********') { word += ' '; break; }
            decode = Math.floor(decode / 100);
        }
        word = word.split('').reverse().join('');
        word == ' ' ? result += ' ' : result += MORSE_TABLE[word];
    }
    return result;
};

module.exports = {
    decode
}