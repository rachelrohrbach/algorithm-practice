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


// Rotating primes
// Given an integer n, return whether every rotation of n is prime.

// Example 1
// Input

// n = 199
// Output

// true
// Explanation

// 199 is prime, 919 is prime, and 991 is prime.

// Example 2
// Input

// n = 19
// Output

// false
// Explanation

// Although 19 is prime, 91 is not.

class Solution {
    solve(n) {
        // Write your code here
        let str = n.toString();
        let num = str.split("");
        for (let i = 0; i < num.length; i++) {
            let last = num.pop();
            num.unshift(last);
            return num;
            
        }
        
    }
}

// Shortest String
// Given a string s consisting only of 1s and 0s, you can delete any two adjacent letters if they are different.

// Return the length of the smallest string that you can make if you're able to perform this operation as many times as you want.

// Example 1
// Input

// s = "11000"
// Output

// 1
// Explanation

// After deleting "10" we get "100" and we can delete another "10" to get "0" which has a length of 1.

class Solution {
    solve(s) {
        // Write your code here
        let arr = s.split("");
        for (let i=0; i<arr.length; i++) {
            while (arr[i] !== arr[i + 1]) {
                arr.splice(i, 2);
            } 
        } return arr.length;
    }
}

class Solution {
    solve(s) {
        
     
        
        let ones=0,
            zeros=0
        
 
        for(let i =0;i<s.length;i++){
               
            if(s[i]==="1" ){
                ones++
            }else{
                zeros++
            }
            
        }
        
       
        
      return Math.abs(ones-zeros)
     
    }
}

// Triangle stairs
// Given n, return a string of stairs of size n. For example given n = 4 return

//    *
//   **
//  ***
// ****
// Note: Each line in the string is separated by a newline separator, or \n.

// Constraints

// n ≤ 2500
// Example 1
// Input

// n = 4
// Output

// "   *
//   **
//  ***
// ****"

// Largest Number By Two Times
// Given a list of integers, return whether the largest number is bigger than the second-largest number by more than two times.

// For example, given the list [3, 9, 6], you should return false, since 9 is not bigger than 12 (2 times 6).

// Given the list [6, 3, 15], you should return true, since 15 is bigger than 12 (2 times 6).

// Example 1
// Input

// nums = [3, 6, 9]
// Output

// false
// Explanation

// 9 is not bigger than 2 * 6.

// Example 2
// Input

// nums = [3, 6, 15]
// Output

// true
// Explanation

// 15 is bigger than 12 (2 * 6).

// Example 3
// Input

// nums = [3, 6, 12]
// Output

// false
// Explanation

// 12 is not bigger than 2 * 6, they're equal.

// Reverse Osmosis
// Given two lists of integers nums, and target, consider an operation where you take some sublist in nums and reverse it. Return whether it's possible to turn nums into target using some number of operations.

// Example 1
// Input

// nums = [1, 2, 3, 8, 9]
// target = [3, 2, 1, 9, 8]
// Output

// true
// Explanation

// We can reverse [1, 2, 3] and [8, 9]

// Example 2
// Input

// nums = [10, 2, 3, 8, 9]
// target = [3, 2, 1, 9, 8]
// Output

// false


// Galaxy Brain Scrum Master
// You are given a two-dimensional list of integers intervals and an integer time. Each element contains [start, end] representing the times when a programmer worked.

// Return the number of programmers that were working at time.

// Example 1
// Input

// intervals = [[1, 5],
// [3, 9],
// [4, 8],
// [10, 13]]
// time = 4
// Output

// 3
// Explanation

// At time 4, there were 3 programmers working [1, 5], [3, 9], [4, 8]



class Solution {
    solve(intervals, time) {
        // Write your code here
        let counter = 0;
        for (let timeclock of intervals) {
            if ((timeclock[0] <= time) && (timeclock[1] >= time)) {
                counter++;
            }
            
        } return counter;
    }
}

// Longest Common Prefix
// Given a list of lowercase alphabet strings words, return the longest common prefix.

// Example 1
// Input

// words = ["anthony", "ant", "antigravity"]
// Output

// "ant"
// Explanation

// "ant" is the longest common prefix between the three strings.


// Domino Placement
// You are given integers n and m representing a board of size n by m. You also have an unlimited number of 1 by 2 dominos.

// Return the maximum number of dominos that can be placed on the board such that they don't overlap and every domino lies entirely within the board.

// Example 1
// Input

// n = 2
// m = 2
// Output

// 2

class Solution {
    solve(n, m) {
        // Write your code here
        let size = m * n;
        return Math.floor(size/2);
        
        
    }
}

// Bob's Game
// Bob is playing a game with himself. He gives himself a list nums. Each round, Bob chooses two elements of the list and replaces them with one positive integer with the same sum as the numbers he selected. Bob declares victory when all of the number in the array are even.

// Return the minimum number of rounds Bob must make before he can declare victory, or return -1 if Bob can never declare victory.

// Constraints

// 2 ≤ N ≤ 100,000 where N is the length of nums.
// 0 ≤ nums[i] ≤ 100,000
// Example 1
// Input

// nums = [1, 1, 3, 7, 6, 12]
// Output

// 2
// Explanation

// Bob can take:

// 1 and 1 to make 2.
// 3 and 7 to make 10.
// In the end we have [2, 10, 18]

// Example 2
// Input

// nums = [0, 2, 2, 3, 5, 7]
// Output

// -1
// Explanation

// Whether we merge 3 and 5, 3 and 7, or 5 and 7, we are left with one odd integer. The odd integer can't merge with any even integer to become even.

class Solution {

}


// Parentheses Grouping
// Given a string s containing balanced parentheses "(" and ")", split them into balanced groups.

// Constraints

// n ≤ 10,0000 where n is length of s.
// Example 1
// Input

// s = "()()(()())"
// Output

// ["()", "()", "(()())"]


// Just Average
// Given a list of integers nums and an integer k, return true if you can remove exactly one element from the list to make the average equal to exactly k.

// Constraints

// 2 ≤ n ≤ 1,000 where n is length of nums
// nums[i], k ≤ 1,000,000
// Example 1
// Input

// nums = [1, 2, 3, 10]
// k = 2
// Output

// true
// Explanation

// We can take 10 out to reach an average of 2 since (1 + 2 + 3) / 3 = 2

// Example 2
// Input

// nums = [1, 3]
// k = 2
// Output

// false
// Explanation

// If we remove 1, we get an average of 3 and if we remove 3, we get an average of 1.

// Austin Powers
// Given an integer n greater than or equal to 0, return whether it is a power of two.

// Example 1
// Input

// n = 0
// Output

// false
// Example 2
// Input

// n = 1
// Output

// true
// Explanation

// 2^0 = 1

// Example 3
// Input

// n = 2
// Output

// true
// Explanation

// 2^1 = 2


// Pied Piper
// Given a list of lowercase alphabet strings words, return the length of the longest contiguous sublist where all words share the same first letter.

// Example 1
// Input

// words = ["she", "sells", "seashells", "he", "sells", "clams"]
// Output

// 3
// Explanation

// ["she", "sells", "seashells"] all share the first letter s.

// Recurring Character
// Given a string, return the index of the first recurring character in it. If there are no recurring characters, return -1.

// Example 1
// Input

// s = "abcda"
// Output

// 4
// Explanation

// The a at index 4 is the first recurring character.

// Example 2
// Input

// s = "abcde"
// Output

// -1
// Explanation

// No recurring characters in this string.

// Example 3
// Input

// s = "aaaaa"
// Output

// 1
// Explanation

// We want the first recurring character.

class Solution {
    solve(s) {
        // Write your code here
        const hash = {};
        for (let i = 0; i < s.length; i++) {
            if (!hash[s[i]]) {
                hash[s[i]] = true
            } else {
                return i
            }
        }
        return -1
    }
}

// Max Product
// Given a list of integers, find the largest product of two distinct elements.

// Example 1
// Input

// nums = [5, 1, 7]
// Output

// 35
// Explanation

// 35 is the largest product that can be made from 5 * 7

// Example 2
// Input

// nums = [7, 1, 7]
// Output

// 49
// Explanation

// 49 is the largest product that can be made from 7 * 7. The values can be the same but they must be separate elements.

// Example 3
// Input

// nums = [-5, 1, -7]
// Output

// 35
// Explanation

// 35 is the largest product that can be made from -5 * -7.

class Solution {
    solve(nums) {
        nums.sort((a,b) => a - b);
        for (let i = 0; i < nums.length; i++) {
           return Math.max((nums[0]* nums[1]), (nums[nums.length-2]* nums[nums.length-1]))
        }
        
    }
}


// Sum of two numbers
// Given a list of numbers nums and a number k, return whether any two numbers from the list add up to k. You may not use the same element twice.

// Note: Numbers can be negative or 0.

// Bonus: Can you do this in one pass?

// Example 1
// Input

// nums = [35, 8, 18, 3, 22]
// k = 11
// Output

// true
// Explanation

// 8 + 3 = 11

// Example 2
// Input

// nums = [10, 36, 22, 14]
// k = 4
// Output

// false
// Explanation

// No two numbers in this list add up to 4.

// Example 3
// Input

// nums = [24, 10, 11, 4]
// k = 15
// Output

// true
// Explanation

// 11 + 4 = 15

// Example 4
// Input

// nums = [-22, 22, -11, 11]
// k = 0
// Output

// true
// Explanation

// -11 + 11 = 0

// Example 5
// Input

// nums = [15, 0, 3, 2]
// k = 15
// Output

// true
// Explanation

// 15 + 0 = 15


class Solution {
    solve(nums, k) {
        // Write your code here
        let hash = {};
        for (let num of nums) {
            if(hash[num]) {
                return true;
            } else {
                hash[k - num] = true
            }
            }
            return false;
        }
        
    } 

    // Run-Length Encoding
    // Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent
    // repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would
    // be encoded as "4A3B2C1D2A".
    
    // Implement run-length encoding. You can assume the string to be encoded have no digits
    // and consists solely of alphabetic characters.
    
    // Example 1
    // Input
    
    // s = "AAAABBBCCDAA"
    // Output
    
    // "4A3B2C1D2A"
    // Example 2
    // Input
    
    // s = "ABCDE"
    // Output
    
    // "1A1B1C1D1E"
    // Example 3
    // Input
    
    // s = "AABBA"
    // Output
    
    // "2A2B1A"

    class Solution {
        solve(s) {
            // Write your code here
            let arr = [];
            let counter = 0;
            for (let i = 0; i < s.length; i++) {
                if (s[i] === s[i+1]) {
                    ++counter;
                } else {
                arr.push(++counter + s[i]);
                counter =0;
            } 
            }
            return arr.join("");
        }
    }

// Wolf of Wall Street
// Given a list of integers prices representing the stock prices of a company in chronological order, return the maximum profit you could have made from buying and selling that stock once.

// You must buy before you can sell it.

// Note: You are not required to buy or sell the stock.

// Example 1
// Input

// prices = [9, 11, 8, 5, 7, 10]
// Output

// 5
// Explanation

// You can buy at 5 and sell at 10.

// Example 2
// Input

// prices = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output

// 8
// Explanation

// You can buy at 1 and sell at 9.

// Example 3
// Input

// prices = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// Output

// 0
// Explanation

// The stock's only going down so we don't buy at all.

    class Solution {
        solve(prices) {
            // Write your code here
            let maxProfit = 0;
            for (let i = 0; i < prices.length; i++) {
                for (let j = i + 1; j < prices.length; j++) {
                    let profit = prices[i] - prices[j];
                    if (profit > maxProfit) {
                        maxProfit = profit;
                    }
                }
            } return maxProfit;
        }
    }


//     Package Versioning
// Given strings older and newer, each representing software package versions in the format major.minor.patch, return whether the newer version is actually newer than the older.

// Example 1
// Input

// older = "11.1.2"
// newer = "11.1.3"
// Output

// true
// Explanation

// The patch version of the new string is more recent.

// Example 2
// Input

// older = "3.1.2"
// newer = "1.1.3"
// Output

// false
// Explanation

// The old version has a newer major version since 3 > 1

// Example 3
// Input

// older = "3.1.2"
// newer = "3.2.3"
// Output

// true
// Explanation

// The minor version of the new package is more recent

// Example 4
// Input

// older = "13.1.2"
// newer = "3.2.3"
// Output

// false
// Explanation

// Old version has a newer major version since 13 > 3

class Solution {
    solve(older, newer) {
        // Write your code here
        let splitOlder = older.split(".");
        let splitNewer = newer.split(".");
        for (let i = 0; i < splitOlder.length; i++) {
            if (parseInt(splitOlder[i]) > parseInt(splitNewer[i])) {
                return false;
        } else if (parseInt(splitOlder[i]) < parseInt(splitNewer[i])) {
                return true;
    } 
} return false;
}
}

// A unique string
// Given a string s, determine whether it has all unique characters.

// Example 1
// Input

// s = "abcde"
// Output

// true
// Explanation

// All characters only occur once

// Example 2
// Input

// s = "aab"
// Output

// false
// Explanation

// There's two as

// Example 3
// Input

// s = ""
// Output

// true
// Explanation

// All characters occur once (of which there are none)

class Solution {
    solve(s) {
        // Write your code here
        let str = s.split("");
        for (let i = 0; i < str.length; i++) {
           for (let j = i + 1; j < str.length; j++) {
               if (s[i] == s[j]) {
                   return false;
               }
           }
        } return true;
    }
}

// The lonely product
// Given three numbers, a, b, and c, return their product, but if any two numbers are the same, they do not count.

// Example 1
// Input

// a = 2
// b = 3
// c = 4
// Output

// 24
// Explanation

// All three numbers are unique so their product is 2 * 3 * 4 = 24

// Example 2
// Input

// a = 3
// b = 3
// c = 5
// Output

// 5
// Explanation

// There's two 3s so the product is 5

// Example 3
// Input

// a = 3
// b = 3
// c = 3
// Output

// 1
// Explanation

// All three numbers are the same, so they don't count toward the product.

class Solution {
    solve(a, b, c) {
        // Write your code here
        if ((a == b) && (a == c)) {
            return 1;
        } else if (a === c) {
            return b;
        } else if (a === b) {
            return c;
        } else if (b === c) {
            return a;
        } else {
            return a * b * c;
        }
    }
}


