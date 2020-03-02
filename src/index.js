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
    let result = ''
    for(let i = 0; i< expr.length; i= i+10){
        let char = expr.slice(i, i+10)
        let char_morse = ''
        for (let ind = 0; ind < char.length; ind = ind + 2) {
            const element = char.slice(ind, ind+2);
            if(element == '10'){
                char_morse += '.';
            } else if(element == '11'){
                char_morse += '-';
            } else if(element == '00'){

            } else {
                char_morse = ' '
            }
        }

        if(char_morse != ' '){
            result += MORSE_TABLE[char_morse]
        } else {
            result += ' '
        }
            
    
    }
    return result;
}

module.exports = {
    decode
}

// decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010')