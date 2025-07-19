(function main() {
    console.log('Hello World!');

    let nums = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    function removeDuplicates(nums) {
        if (nums.length === 0) return 0;

        let x = null;
        let y = 1;
        let uniqueElements = 1;

        // Create a helper array to identify duplicates
        let numduplicate = [1]; // First is always considered unique
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                numduplicate.push(-1);
            } else {
                numduplicate.push(1);
            }
        }

        while (y < numduplicate.length) {
            if (numduplicate[y] === -1) {
                if (x === null) {
                    x = y;
                }
                y++;
            } else {
                if (x !== null) {
                    // Swap nums[x] and nums[y]
                    let temp = nums[x];
                    nums[x] = nums[y];
                    nums[y] = temp;
                    x++;
                }
                uniqueElements++;
                y++;
            }
        }

        return uniqueElements;
    }

    let count = removeDuplicates(nums);

    console.log("Unique elements:");
    for (let i = 0; i < count; i++) {
        console.log(nums[i]);
    }

    console.log("Number of unique elements: " + count);
})();
