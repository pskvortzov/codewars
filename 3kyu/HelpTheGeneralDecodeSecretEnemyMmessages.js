device.decode = function(code) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? ^'.split('');

    return code.split('').reduce((result, letter, i) => {
        if (alphabet.indexOf(letter) === -1) {
            result += letter;
            return result;
        }

        
        for (currentLetter of alphabet) {
            let index = (alphabet.indexOf(currentLetter)+1) * 2 ** (i+1) % alphabet.length;

            if (alphabet[index-1] === letter) {
                result += currentLetter;
                break;
            }
        };

        return result;
    }, '');
}