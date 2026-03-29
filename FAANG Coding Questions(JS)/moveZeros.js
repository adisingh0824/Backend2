const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function moveZeroes(nums) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }

    return nums;
}
rl.question("Enter numbers (space separated): ", (input) => {
    let nums = input.split(" ").map(Number);

    let result = moveZeroes(nums);

    console.log("Result:", result);

    rl.close();
});