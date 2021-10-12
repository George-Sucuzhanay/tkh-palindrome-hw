function checkPalindrome(str) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return alert('It is not a palindrome');
        }
    }
    return alert('Great! It is a palindrome');
}

let string = prompt('Enter a string: ');

let value = checkPalindrome(string);

console.log(value);