export default function translateIntoPigLatin(english: string) {
    let tokens = english.split(/\s/);
    return tokens.map(translateToken).join(' ');
}

function translateToken(token: string) {

    let result = '',
        leadPunc = '',
        followPunc = '';

    if (!token.length) return result;

    // strip any leading punctuation from front and save
    let lpRegExResult = /^[^\w\s]+/.exec(token);

    if (lpRegExResult) {
        leadPunc = lpRegExResult[0] || '';
        token = token.slice(leadPunc.length);
    }

    let fpRegExResult = /[^\w\s]+$/.exec(token);
    if (fpRegExResult) {
        followPunc = fpRegExResult[0] || '';
        token = token.slice(0, token.length - followPunc.length);
    }

    let tokenRegExResult = /^[^aeiou]+/.exec(token);

    if(!tokenRegExResult) {
        result = translateVowelForm(token);
    } else {
        result = translateConsonantForm(token, tokenRegExResult[0]);
    }
    return leadPunc + result + followPunc;
}

function translateVowelForm (token: string) {
    return token + 'way';
}

function translateConsonantForm (token: string, prefix: string) {
    let result = '';
    let isCapitalised = !isLowerCase(token[0]);
    result = token.slice(prefix.length) + prefix + 'ay';
    if (isCapitalised) {
        return capitalise(result.toLowerCase());
    } else {
        return result;
    }
}

function capitalise (token: string) {
    return token.charAt(0).toUpperCase() + token.slice(1);
}

function isLowerCase(char:string) {
    return char == char.toLowerCase();
};
