/* CHALLENGE 5: MAX CHARACTER    
 * @return char
 * @params str
 * returns the character that is most common in a string
 * @ex max_char('javascript') === 'a'
*/

maxChar = (str) => {
    const charMap = {};
    const maxChar = {
        char : '',
        nr   : 0
    };
    str.split('').forEach(char => {
        if (!charMap[char])
        {
            return charMap[char] = 1;
        }
        charMap[char]++;
    });

    for(let char in charMap){
        if (charMap[char] > maxChar.nr){
            maxChar.char = char;
            maxChar.nr = charMap[char];
        }
    }
    return maxChar.char;
};



module.exports = maxChar;
