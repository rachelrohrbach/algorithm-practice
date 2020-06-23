//Take 5
// Given a array of integers nums, subtract 5 from every number in the array and return the array.
// For example, given the array [8, 3, 10, 15, 9], return [3, -2, 5, 10, 4].

class Solution {
    solve(nums) {
        let newNums = [];
        for (let i = 0; i < nums.length; i++) {
            newNums.push(nums[i]-5);
        } return newNums;
    } 
}