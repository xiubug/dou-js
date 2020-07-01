import unicodeWords from '../shared/unicodeWords';

const hasUnicodeWord = RegExp.prototype.test.bind(
    /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
);

/** 用于匹配由字母数字字符组成的单词 */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function asciiWords(string: string): any[] {
    return string.match(reAsciiWord);
}

/**
 * 将“字符串”分割成单词的数组。
 *
 * @since 0.1.1
 * @category String
 * @param {string} [string=''] 要检查的字符串。
 * @param {RegExp|string} [pattern] 匹配单词的模式。
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string: string, pattern: RegExp | string): any[] {
    if (pattern === undefined) {
        const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        return result || [];
    }
    return string.match(pattern) || [];
}

export default words;