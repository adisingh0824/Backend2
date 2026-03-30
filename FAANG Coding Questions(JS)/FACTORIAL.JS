const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    /////
});

rl.question("Enter a number: ", (input) => {
    let n = Number(input);

    if (n < 0) {
        console.log("Factorial not defined for negative numbers");
    } else {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        console.log("Factorial is:", fact);
    }

    rl.close();
});