const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Three Sum Function
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1, r = nums.length - 1;

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while (nums[l] === nums[l - 1]) l++;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    return res;
}

// Take input
rl.question("Enter numbers (space separated): ", (input) => {
    let nums = input.split(" ").map(Number);

    let result = threeSum(nums);

    console.log("Triplets:", result);

    rl.close();
});