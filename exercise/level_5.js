// 5.1 reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascript ( dùng forEach hoặc reduce )
function Reverses(arr) {
    var arr1 = []
    arr.forEach((str, i) => {
        arr1[arr.length - 1 - i] = str
    });
    console.log(arr1)
}
// Reverses([2, 3, 4])

// 5.2 chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định. 
// Ví dụ: ['a', 'b', 'c', 'd']
// chunk(['a', 'b', 'c', 'd'], 2); 👉[['a', 'b'], ['c', 'd']]
// chunk(['a', 'b', 'c', 'd'], 3); 👉[['a', 'b', 'c'], ['d']]

function chunk(arr, k) {
    const result = []
    for (var i = 0; i < arr.length; i += k) {
        const a = arr.slice(i, k + i)
        result.push(a)
    }
    console.log(result)
}
// chunk(['a', 'b', 'c', 'd', '4'], 2)

// 5.3 uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng. 
// Ví dụ[1, 2, 3, 2, 4] 👉[1, 2, 3, 4]

function removeDuplicates(arr) {
    const a = [...new Set(arr)]
    console.log(a);
}
// removeDuplicates([1, 2, 3, 2, 4])

// 5.4 uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection
//  Ví dụ:
// [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'y': 2, 'x': 1 }] 
// 👉[{ ‘x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]

function uniqArrayObject(arr) {
    const map = new Map(); // Tạo một Map để theo dõi các đối tượng duy nhất

    arr.forEach(obj => {
        // Sắp xếp các khóa của đối tượng
        const sortedKeys = Object.keys(obj).sort();
        // console.log(sortedKeys)
        const key = sortedKeys.map(k => `${k}:${obj[k]}`).join(','); // Tạo chuỗi đại diện cho đối tượng
        // console.log(key)
        // Nếu chưa có đối tượng với khóa này, thêm vào Map
        if (!map.has(key)) {
            map.set(key, obj); // Lưu đối tượng vào Map
        }
    });

    // Trả về các đối tượng duy nhất dưới dạng mảng
    console.log(Array.from(map.values()));
}
// uniqArrayObject([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'y': 2, 'x': 1 }])

// 5.5 Group by: Cho đầu vào là 1 collection ( array of object ), 
// Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định. 
// Ví dụ:
// const collect = [{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 2, b: 2 }];
// groupBy(collect, ‘a'); 
// 👉 output { 1: [{ a: 1, b: 2 }, { a: 1, b: 3 }], 2: [{ a: 2, b: 2 }] }

// groupBy(collect, ‘b'); 
// 👉 output { 2: [{ a: 1, b: 2 }, { a: 2, b: 2 }], 3: [{ a: 1, b: 3 }] }

function groupBy(collection, key) {
    return collection.reduce((accumulator, current) => {
        // Lấy giá trị của trường được chỉ định
        const groupKey = current[key]

        // Nếu nhóm đó chưa tồn tại trong accumulator, tạo một mảng mới
        if (!accumulator[groupKey]) {
            accumulator[groupKey] = []
        }

        // Thêm đối tượng hiện tại vào nhóm tương ứng
        accumulator[groupKey].push(current)

        return accumulator // Trả về accumulator để tiếp tục quá trình
    }, {}); // Khởi tạo accumulator là một đối tượng rỗng
}

const collect = [{ a: 1, b: 2 }, { a: 1, b: 3 }, { a: 2, b: 2 }]

// console.log(groupBy(collect, 'a'))

// 5.6 TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng. 
// VD: “    hello     world    “ => “hello world" 
//  “   I    am    good      “ => “I am good”

function TrimAll(str) {
    var a = str.trim().replace(/\s+/g, ' ')
    console.log(a)
}

// TrimAll('    hello     world    ')

// 5.7 MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một function để trả ra một mảng các object theo thứ tự mảng các key. 
// Ví dụ
// keys = [‘b', ‘a', ‘c']
// collections = [{ a: 1, b: 1, c: 2, d: 4, e: 5 }, { a: 2, b: 1, c: 5, d: 4, e: 5 }, { d: 4, e: 5, a: 22, b: 11, c: 51, }]
// // => [{b: 1, a: 1, c: 2}, {b: 1, a: 2, c: 5}, {b: 11, a: 22, c: 51}]

function MapKey(keys,collections){
    return collections.map(obj => {
        // Tạo object mới chỉ chứa các key trong `keys` theo thứ tự
        let newObj = {}
        keys.forEach(key => {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = obj[key]
            }
            
        });
        return newObj
    });
}
// console.log(MapKey(['b', 'a', 'c'], [
//     { a: 1, b: 1, c: 2, d: 4, e: 5 },
//     { a: 2, b: 1, c: 5, d: 4, e: 5 },
//     { d: 4, e: 5, a: 22, b: 11, c: 51 }
// ]))

// 5.8 Switch Order: Viết function để thay đổi thứ tự order của các object. 
// Ví dụ:
// arr = [{ id: 10, order: 0 }, { id: 12, order: 1 }, { id: 9, order: 2 }, { id: 11, order: 3 }]
// switchOrder(9, 1)  
// ( chuyển object có id bằng 9 lên vị trí order = 1 )
// => [{id: 10, order: 0}, {id: 9, order: 1}, {id: 12, order: 2}, {id: 11, order: 3}]

function switchOrder(arr, id, newOrder) {
    // Tìm object có id cần chuyển và lấy index của nó
    const index = arr.findIndex(item => item.id === id)
    if (index === -1) return arr; // Nếu không tìm thấy id thì trả về mảng gốc

    // Lấy object cần chuyển và xoá khỏi vị trí ban đầu
    const [itemToMove] = arr.splice(index, 1)

    // Điều chỉnh `order` mới cho object
    itemToMove.order = newOrder

    // Chèn lại `itemToMove` vào vị trí mới trong mảng
    arr.splice(newOrder, 0, itemToMove)

    // Cập nhật lại `order` cho từng object trong mảng
    console.log(arr.map((item, idx) => ({ ...item, order: idx }))) 
}

// switchOrder([{ id: 10, order: 0 }, { id: 12, order: 1 }, { id: 9, order: 2 }, { id: 11, order: 3 }],9,1)

    // SumAll: Viết function để tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ:
    // Ví dụ:
    // Arr = [{ a: 2, b: 10 }, { a: 12, c: 11 }, { a: 8, b: 14, d: 20 }, { a: ‘8’ }]
    // 👉 { a: 30, b: 24, c: 11, d: 20 }
    // Đầu vào là một mảng các object và các phần tử trong object không cố định.
    // Gợi ý js: reducer(), Object.keys()

function SumAll(arr){
    return arr.reduce((acc, obj) => {
        // console.log(acc)
        Object.keys(obj).forEach(key => {
            // Chuyển giá trị về số và cộng dồn vào key tương ứng trong acc
            acc[key] = (acc[key] || 0) + Number(obj[key]);
        });
        return acc;
    }, {});

}
// console.log(SumAll([{ a: 2, b: 10 }, { a: 12, c: 11 }, { a: 8, b: 14, d: 20 }, { a: '8' }]))


