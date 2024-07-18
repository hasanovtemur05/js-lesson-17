// 35 - masala
function longestName(arr) {
    let arr1 = ""
    for(let i = 0; i < arr.length; i++){
        if (arr1.length < arr[i].length) {
            arr1 = arr[i]
        }
    }
    console.log(arr1);
}
// longestName(["Alice", "Bob", "Christina", "David"]); // "Christina"





// 36 - masala
function removeConsecutiveDuplicates(str) {
    let result = ""
    for(let item of str){
        if (!result.includes(item)) {
            result += item
        }
    }
    console.log(result);
}
// removeConsecutiveDuplicates("aaabbbcccaaa"); // "abc"




// 37 - masala
function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;
    if (k === 0) return arr;
    let end = arr.slice(n - k);
    let start = arr.slice(0, n - k);
    return end.concat(start);
}
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]




// 38 - masala
function flattenArray(arr) {
    let newarr = []
    for(let i = 0; i < arr.length; i++){
        newarr.push(arr[i].join(""))
    }
    console.log(newarr.join("").split("").join(","));
}

// flattenArray([[1, 2], [3, 4], [5]]); // [1, 2, 3, 4, 5]




// 39 - masala
function multiplicationTable(n) {
    let arr = []
    for(let i = 1; i <= n; i++){
        let row = []
        for(let g = 1; g <= n; g++){
            row.push(g * i)
        }
        arr.push(row)
    }
    console.log(arr);
}

// multiplicationTable(3);
// [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]



// 40 - masala
function splitArrayInHalf(arr) {
    let index = Math.ceil(arr.length / 2);
    let firstHalf = arr.slice(0, index);
    let secondHalf = arr.slice(index);
    console.log(firstHalf, secondHalf);
}
// splitArrayInHalf([1, 2, 3, 4, 5]); // [[1, 2, 3], [4, 5]]



// 41 - masala
function swapDiagonals(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        let temp = matrix[i][i];
        matrix[i][i] = matrix[i][n - i - 1];
        matrix[i][n - i - 1] = temp;
    }
    console.log(matrix);
}
// swapDiagonals([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
    
// ]);


// [
//   [3, 2, 1],
//   [4, 5, 6],
//   [9, 8, 7]
// ]




// 42 - masala
function findGCD(arr) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
        if (result === 1) {
            break;
        }
    }
    return result;
}
// console.log(findGCD([24, 36, 48])); // 12
// console.log(findGCD([7, 14, 21]));  // 7