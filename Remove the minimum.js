function removeSmallest(numbers) {
    const nums = [...numbers];
    nums.splice(nums.indexOf(Math.min(...nums)), 1);
    return nums;
}