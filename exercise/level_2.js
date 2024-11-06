// 2.1 Write a program that takes a list of numbers as input and returns the second largest number in the list.
function SecondLargest(nums){
    var max = nums[0]
    for(var i =0 ; i<=nums.length-1; i++){
        if (max < nums[i]) max = nums[i]
    }
    var max2 = -Infinity
    for (var i = 0; i <= nums.length-1; i++){
        if (max2 <= nums[i] && max > max2 && nums[i] != max) max2 = nums[i] 
    }
    console.log(max2)
}
// SecondLargest([-4,5,8,9])

// 2.2 Write a program that takes a list of strings as input and returns the longest word in the list.
function MaxStr(str) {
    // const a = str.split(' ')
    var b = str[0]
    for (var i = 0; i <= str.length - 1; i++) {
        var s = str[i]
        if (b.length < s.length) b = str[i]
    }
    console.log(b)
}
// MaxStr(['kinh','123'])

// 2.3 Write a program that takes two strings as input and returns the longest common subsequence of the two strings.



function MaxStr(str1, str2) {
    function differentStr(str) {
        let newStr = [];
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j <= str.length; j++) {
                newStr.push(str.slice(i, j));
            }
        }
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j <= str.length + 1; j++) {
                if (newStr[i] === newStr[j]) {
                    newStr.pop(i);
                }
            }
        }
        return newStr
    }
    let arr1 = differentStr(str1)
    let arr2 = differentStr(str2)

    let cm = arr1.filter((subString) => arr2.includes(subString));

    let max = cm[0]

    for (let i = 0; i < cm.length; i++) {
        if (cm[i].length > max.length) {
            max = cm[i]
        }
    }

    console.log(max)
}

// MaxStr('abc','bcd')

// 2.4 Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.

function Sum(nums){
    var sum = 0
    for(var i=0; i<nums.length;i++){
        if(nums[i]%3==0 && nums[i]%5==0) sum+=nums[i]
    }
    console.log(sum)
}
// Sum([1,2,3,4,5,15])

// 2.5 Write a program that takes a list of integers as input and returns the maximum sum of any contiguous subarray within the list.
function maxSubArraySum(arr) {
    let maxSoFar = arr[0];      // Tổng lớn nhất gặp được
    let maxEndingHere = arr[0];  // Tổng lớn nhất tính đến phần tử hiện tại

    for (let i = 1; i < arr.length; i++) {
        // So sánh tìm giá trị lớn nhất cho maxEndingHere
        if (maxEndingHere + arr[i] > arr[i]) {
            maxEndingHere = maxEndingHere + arr[i];
        } else {
            maxEndingHere = arr[i];
        }

        // So sánh cập nhật maxSoFar
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
        }
    }

    console.log(maxSoFar)
}
maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3])