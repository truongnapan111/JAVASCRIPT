// 3.1 Write a program that takes a list of numbers as input and returns the second smallest number in the list.
function MinSecond(nums) {
    var min = nums[0]
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i]
    }
    var min2 = Infinity
    for (var i = 0; i < nums.length; i++) {
        if (min2 > nums[i] && min < nums[i])
            min2 = nums[i]
    }
    console.log(min2)
}
// MinSecond([1,2,3,4,5])

//  3.2 Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.
function MaxMin(nums) {
    var min = nums[0]
    var max = nums[0]
    for (var i = 0; i < nums.length; i++) {
        if (max < nums[i]) max = nums[i]
        if (min > nums[i]) min = nums[i]
    }
    console.log(max + ' - ' + min)
}
// MaxMin([1, 2, 91, 9, 100])

// 3.3 Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers. ( Tìm độ dài của chuỗi con tịnh tiến dài nhất )
function LongNums(nums) {
    var count = 1
    for (var i = 0; i < nums.length; i++) {
        var count2 = 1
        var a = nums[i]
        for (var j = i; j < nums.length; j++) {
            if (a < nums[j + 1]) {
                count2++
                a = nums[j + 1]
            }

        }
        if (count2 > count) {
            count = count2
            count2 = 1

        }
    }
    console.log(count)
}

// LongNums([3, 10, 2, 1, 20])

// 3.4 Write a program that takes a list of strings as input and returns the two strings with the largest overlap of characters.


function TwoStr(str) {
    // So sánh 2 chuỗi
    // Xây dựng bảng tần suất kí tự cho str1 
    // So sánh với str2 đếm số ký tự giống trả về count
    function countCommonChars(str1, str2) {
        let charMap = {}
        let count = 0
        // 
        for (let char of str1) {
            if (charMap[char]) {
                charMap[char]++
            } else {
                charMap[char] = 1;
            }
        }

        for (let char of str2) {
            if (charMap[char] && charMap[char] > 0) {
                count++;
                charMap[char]--;
            }
        }
        // console.log(charMap)
        return count;
    }
    let maxOverlap = 0;
    let result = ["", ""]

    // So sánh từng cặp chuỗi
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            let overlapCount = countCommonChars(str[i], str[j]);
            if (overlapCount > maxOverlap) {
                maxOverlap = overlapCount
                result = [str[i], str[j]]
            }
        }
    }

    console.log(result)
}
// TwoStr(["hello", "world", "foobar", "barfoo", "he", "llo"])

// 3.5 Write a program that takes a list of numbers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
// sắp xếp mảng tăng dần
// lấy giá trị min bằng 1 

function SmallestNum(nums) {

    nums.sort((a, b) => a - b)

    let min = 1

    for (let i = 0; i < nums.length; i++) {
        // Nếu số hiện tại lớn hơn min, thì không thể tạo ra min
        if (nums[i] > min) {
            break;
        }
        // Cộng số hiện tại vào min
        min += nums[i]
    }

    console.log(min)
}
// SmallestNum([1, 2, 5,8])

// 3.6 Write a program that takes two lists of integers as input and returns the median of the combined list.
function MediumTwo(num1, num2) {
    const nums = [...num1, ...num2]
    const longNums = nums.length
    var s = 0
    if (longNums % 2 == 0) {
        const p = longNums / 2
        s = (nums[p] + nums[p - 1]) / 2
    }
    else {
        const p = (longNums - 1) / 2
        s = nums[p]
    }
    console.log(s)
}
// MediumTwo([1, 2, 4], [5, 6])

// 3.10 Write a program that takes a list of strings as input and returns the list sorted by the number of distinct characters in each string, with the shortest strings appearing first.

function SortStr(strings) {
    const n = strings.length;

    for (let i = 0; i < n ; i++) {
        for (let j = i+1; j < n ; j++) {
            if (strings[i].length > strings[j].length) {
                const temp = strings[i];
                strings[i] = strings[j];
                strings[j] = temp;
            }
        }
    }

    console.log(strings);
}

// SortStr(['apple', 'banana', 'orange', 'kiwi', 'strawberry']);

// 