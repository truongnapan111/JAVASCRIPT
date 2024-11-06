// 4.1 Write a program that takes a list of integers as input and returns the minimum number of moves required to sort the list in ascending order using bubble sort.
// Dùng biến sorted để check trang thái sắp xếp cứ mỗi lần hoán đổi thì +1
function TotalSort(nums) {
    const n = nums.length;
    var count = 0
    let sorted = false;
    // Sử dụng thuật toán sắp xếp nổi bọt (Bubble Sort)
    for (let i = 0; i < n - 1; i++) {
        sorted = true
        for (let j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                count++
                sorted = false
            }
        }
        if (sorted) break
    }

    console.log(count);
}
// TotalSort([3, 1, 4, 2, 6, 5])

// 4.2 Write a program that takes a list of integers as input and returns the number of distinct subsequences of the list that sum up to a target value.
// 
function findSubsets(nums, index) {
    let result = [[]];
    // Duyệt qua từng phần tử trong mảng
    for (let num of nums) {
        let newSubsets = []
        // Duyệt qua tất cả các tập con hiện có trong `result`
        for (let subset of result) {
            newSubsets.push([...subset, num])
        }
        // Thêm các tập con mới vào kết quả
        result = result.concat(newSubsets)
    }

    // Lọc các tập con có ít nhất 2 phần tử
    const filteredResult = result.filter(subset => subset.length >= 2);
    var a = []
    // Tính tổng các phần tử trong mỗi tập con
    const sums = filteredResult.map(subset => {
        let sum = 0;
        for (let j = 0; j < subset.length; j++) {
            sum += subset[j];
        }
        a.push(sum)
    });
    // đếm tổ hợp có tổng bằng index
    var SUM = 0
    for (var i = 0; i < a.length; i++) {
        if (a[i] == index) {
            SUM++
        }
    }
    console.log(SUM);
}

// findSubsets([1, 1, 2, 3, 4], 5);

// 4.3 Write a program that takes a list of strings as input and returns the length of the longest substring that appears in every string in the list.


// 4.6 Write a program that takes a list of integers as input and returns the maximum product of any three distinct elements in the list.
function Max(nums) {
    let result = [[]];

    for (let num of nums) {
        let newSubsets = []
        if (num != 0) {
            for (let subset of result) {
                newSubsets.push([...subset, num])
            }
        }

        result = result.concat(newSubsets)
    }
    // Lọc các tập con có 3 phần tử
    const filteredResult = result.filter(subset => subset.length == 3);
    var a = []
    // Tính tổng các phần tử trong mỗi tập con
    // console.log(filteredResult)
    const sums = filteredResult.map(subset => {
        let multiplication = 1;
        for (let j = 0; j < subset.length; j++) {
            multiplication *= subset[j];
        }
        a.push(multiplication)
    });
    // console.log(a)
    // đếm tổ hợp có tổng bằng 
    var max = -Infinity
    for (var i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i]
        }
    }
    console.log(max);
}
// Max([-10, -5, 0, 1, 2, 3, 4])

// 4.7 Write a program that takes a list of strings as input and returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.

function SortStr(arr) {
    arr.forEach((str1, i) => {
        arr.forEach((str2, j) => {
            if (str1.length > str2.length || (str1.length === str2.length && str1 > str2)) {
                // Hoán đổi nếu str2 ngắn hơn hoặc có cùng độ dài nhưng đứng trước trong từ điển
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        });
    });
    console.log(arr);
}
// SortStr(['ahe cat in the hat', 'the lazy dog jumps over the fence', 'the cat in the hat'])

// 4.9 Write a program that takes a list of integers as input and returns the length of the longest increasing subsequence of the numbers, with the additional constraint that no two adjacent elements in the subsequence can differ by more than 1.
// Đầu vào sẽ dùng biến acc với 2 giá trị currentLength và maxLength 
// nếu độ lệch 2 phần tử kề nhau bằng 1 thì tăng currentLength nếu không thì currentLength = 1
// cập nhật maxLength 
function longestSubsequence(nums) {
    if (nums.length === 0) return 0;

    // Sử dụng reduce để lưu trữ dãy con dài nhất
    const result = nums.reduce((acc, num, index) => {
        // Nếu phần tử trước liền kề và chênh lệch đúng 1, tăng độ dài dãy hiện tại
        if (index > 0 && num - nums[index - 1] === 1) {
            acc.currentLength += 1;
        } else {
            // Nếu không, đặt lại độ dài dãy hiện tại về 1
            acc.currentLength = 1;
        }

        // Cập nhật độ dài lớn nhất tìm thấy
        acc.maxLength = Math.max(acc.maxLength, acc.currentLength);

        return acc;
    }, { currentLength: 1, maxLength: 1 });

    console.log(result.maxLength)
}

// longestSubsequence([1, 2, 3, 8, 6, 3])

// 4.10 Write a program that takes a list of strings as input and returns the two strings with the largest overlap of substrings, where the substrings must be at least k characters long (where k is a parameter to the function).
function TwoStr(str, k) {
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
    let result

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
    if (maxOverlap >= k) {
        console.log(result)
    }
    else {
        console.log("Khong tim thay")
    }
    
}
// TwoStr(["hello", "world", "foobar", "barfoo", "he", "llo"], 5)
