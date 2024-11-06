// 1.1 Write a program that takes two numbers as inputs and displays their sum.
function Sum(a, b) {
    let sum = a + b;
    console.log(sum);
}
// Sum(1,2)

// 1.2 Write a program that takes a string as input and displays the length of the string.
function LengthStr(str) {
    console.log(str.length)
}
// LengthStr('1235')

// 1.3 Write a program that takes a number as input and displays its square. ( Tính bình phương )8
function Square(a) {
    console.log(a * a)
}

// 1.4 Write a program that takes a list of numbers as input and displays the largest number in the list.
function MaxNum(a) {
    var p = 0
    for (var i = 0; i <= a.length - 1; i++) {
        if (p < a[i]) p = a[i]
    }
    console.log(p)
}
// MaxNum([100,1,2,3,10])

// 1.5 Write a program that takes a list of strings as input and displays the shortest string in the list.
function MinStr(str) {
    // const a = str.split(' ')
    var b = str[0]
    for (var i = 0; i <= str.length - 1; i++) {
        var s = str[i]
        if (b.length > s.length) b = str[i]
    }
    console.log(b)
}
// MinStr(['kinh','123'])

// 1.6 Write a program that takes a list of numbers as input and sorts the list in ascending order.
function SortNum(num) {
    num.sort((a, b) => a - b)
    console.log(num)
}
// SortNum([1,4,0,10])

// 1.7 Write a program that takes a list of strings as input and sorts the list in alphabetical order.
function SortStr(inputStrings) {
    // function sortStrings(strings) {
    //     return strings.sort((a, b) => a.localeCompare(b));
    // }
    for (let i = 0; i < inputStrings.length - 1; i++) {
        for (let j = i+1; j < inputStrings.length; j++) {
            if (inputStrings[i] > inputStrings[j]) {
                let temp = inputStrings[i];
                inputStrings[i] = inputStrings[j];
                inputStrings[j] = temp;
            }
        }
    }
    console.log(inputStrings);
}

// SortStr(["sbanana", "apple", "fig", "pear"])

// 1.8 Write a program that takes a list of numbers as input and returns the median of the numbers.
function MedianNum(nums){
    const longNums = nums.length
    var s = 0
    if(longNums%2==0){
        const p = longNums/2
        s = (nums[p]+nums[p-1])/2
    }
    else {
        const p = (longNums-1) / 2
        s = nums[p]
    }
    console.log(s)
}
// MedianNum([1,5,6,8])

// 1.9 Write a program that tádakes a string as input and returns the number of words in the string
function TotalStr(str){
    var sum =0
    str.trim()
    for(var i=0; i<=str.length-1;i++){
        if(str[i] == ' ') sum++
    }
    console.log(sum)
}
// TotalStr('1 2 3 ')

// 1.10 Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'.
function Total(str) {
    var sum = 0
    for (var i = 0; i <= str.length-1; i++) {
        if (str[i] == 'a') sum++
    }
    console.log(sum)
}
// Total('aaaa bbbaaa')

