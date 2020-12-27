// -------Challenge------- // 
// You have two integer arrays, a and b, and an integer target value, v
/* 
    Determine whether there is a pair of numbers, where one number is taken from a and
    the other from b, that can be added together to get a sum of v
*/
// Return true if such a pair exists, otherwise return false 

// -------My Solution------- // 
// function sumOfTwo(nums1, nums2, value) {
//     var sums = [];

//     for (var i = 0; i < nums1.length; i++) {
//         for (var j = 0; j < nums2.length; j++) {
//             var num1PlusNum2 = nums1[i] + nums2[j];
//             sums.push(num1PlusNum2);
//         }
//     }

//     if (sums.includes(value)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// -------UI------- // 
var addToNums1Btn = document.getElementById("submit-num1");
var addToNums2Btn = document.getElementById("submit-num2");
var submitBtn = document.getElementById("submit");
var nums1InputEl = document.getElementById("num1");
var nums2InputEl = document.getElementById("num2");
var valueInputEl = document.getElementById("value");
var nums1ArrEl = document.getElementById("arr1");
var nums2ArrEl = document.getElementById("arr2");
var sumCheckerEl = document.getElementById("sum-checker");

var nums1 = [];
var nums2 = [];

function addToNums1() {
    var num1 = parseInt(nums1InputEl.value);
    if (nums1InputEl.value === "") {
        alert("Please input a whole number.");
        return;
    }

    nums1.push(num1);
    nums1ArrEl.textContent = nums1;
}

addToNums1Btn.addEventListener("click", addToNums1);

function addToNums2() {
    var num2 = parseInt(nums2InputEl.value);
    if (nums2InputEl.value === "") {
        alert("Please input a whole number.");
        return;
    }
    
    nums2.push(num2);
    nums2ArrEl.textContent = nums2;
}

addToNums2Btn.addEventListener("click", addToNums2);

function sumOfTwo(nums1, nums2, value) {
    var sums = [];

    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            var num1PlusNum2 = nums1[i] + nums2[j];
            sums.push(num1PlusNum2);
        }
    }

    if (sums.includes(value)) {
        return true;
    } else {
        return false;
    }
}
