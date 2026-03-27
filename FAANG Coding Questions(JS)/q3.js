const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first string: ", (s) => {
    rl.question("Enter second string: ", (t) => {

        function isAnagram(s, t) {
            if (s.length !== t.length) return false;

            let map = {};

            for (let c of s) map[c] = (map[c] || 0) + 1;

            for (let c of t) {
                if (!map[c]) return false;
                map[c]--;
            }

            return true;
        }

        console.log("Result:", isAnagram(s, t));
        rl.close();
    });
});