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

// Flatten Lists
// Given a list of list of integers, flatten the elements into a single list and return it.
class Solution {
    solve(lsts) {
        let splitList = lsts.split()

    }
}

// Numeronym
// Given a string s with length greater than 2, return a new string where the first and last letter are the same, but the letters in between are replaced by their length.
// Example 1
// Input
// s = "croneberry"
// Output
// "c8y"

class Solution {
    solve(s) {
        
        let count=1
        for(let i =1;i<s.length-2;i++){
            count++;
        }
        
        return s[0]+count+s[s.length-1]
    
    }
}

// N-rooks
// You've got an integer n representing a chessboard of size n x n. Return the number of ways you can place n rooks, such that no two rooks attack each other.
// Two ways are considered different if in one of the ways, some cell of the chessboard is occupied, and in the other way, the cell is not occupied.
// Note: two rooks are attacking each other if they are either on the same row or on the same column.

// Example 1
// Input
// n = 3
// Output
// 6
// Explanation
// Here are the different chessboard configurations, where X is a rook.

// X O O 
// O X O
// O O X

// X O O 
// O O X
// O X O

// O X O
// X O O
// O O X

// O X O
// O O X
// X O O

// O O X
// O X O
// X O O

// O O X
// X O O
// O X O

class Solution {
    solve(n) {
        // Write your code here
        let num = 1
        
        for(let i=1;i<=n;i++){
            num *= i
        }
        
        return num
    }
}


// Rookie Mistake
// You’re given a string containing letters of three types, R, B, and ..
// R represents your current position, B represents a blocked position, and . represents an empty position. In one step, you can move to any adjacent position to your current position, as long as it is empty. Can you reach either the leftmost position or the rightmost position?
// Return true if you can reach either the leftmost or the rightmost position, or false if you cannot.

// Example 1
// Input
// s = "......B....R.............."
// Output
// true
// Explanation
// We can reach the rightmost position since it's not blocked.

// Example 2
// Input
// s = "B...B...R........BBBB"
// Output
// false
// Explanation
// We can't reach either side since they're both blocked.
// class Solution {
    solve(s) {
        // Write your code here
        let arr = s.split("R")
        if (arr[0].includes("B") && arr[1].includes("B")){
            return false
        }else{
            return true
        }
    }


// Narcissistic number
// Given an integer n, return whether it is equal to the sum of its own digits raised to the power of the number of digits.
// Example 1
// Input
// n = 153
// Output true
// Explanation 153 = 1 ** 3 + 5 ** 3 + 3 ** 3
    class Solution {
        solve(n) {
            // Write your code here
            let splitN = [...n + ''].map(num => parseInt(num))
            let num = splitN.reduce((a,b) => a + b**splitN.length,0)
            return num === n
            }
        }