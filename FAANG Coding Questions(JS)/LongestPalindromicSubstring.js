const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter string: ", (input) => {

    function longestPalindrome(s) {
        let res = "";

        function expand(l, r) {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > res.length) {
                    res = s.slice(l, r + 1);
                }
                l--;
                r++;
            }
        }

        for (let i = 0; i < s.length; i++) {
            expand(i, i);
            expand(i, i + 1);
        }

        return res;
    }

    console.log("Longest Palindrome:", longestPalindrome(input));
    rl.close();
});