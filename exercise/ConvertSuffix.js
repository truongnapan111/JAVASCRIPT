// Đọc từng ký tự trong chuỗi và xác định xem đó là số, toán tử, hay dấu ngoặc.
// Xử lý toán tử theo độ ưu tiên(ví dụ: nhân, chia có độ ưu tiên cao hơn cộng, trừ).
// Xử lý dấu ngoặc đơn để đảm bảo các phép toán trong ngoặc được tính trước.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Lưu độ ưu tiên phép toán
const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
};

// Hàm tính toán theo toán tử
function applyOperator(operators, values) {
    const operator = operators.pop();
    // console.log(operator)
    const right = values.pop();
    // console.log(right)

    const left = values.pop();
    // console.log(left)

    switch (operator) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': return left / right;
    }
}

function evaluateExpression(expression) {
    const operators = [];
    const values = [];

    let i = 0;
    while (i < expression.length) {
        let ch = expression[i];
        // console.log(ch)
        // Bỏ qua khoảng trắng
        if (ch === ' ') {
            i++;
            continue;
        }

        // Nếu là số, lấy tất cả các chữ số(\d là biểu thức chính quy đại diện cho 0-9)
        if (/\d/.test(ch)) {
            let num = 0;
            while (i < expression.length && /\d/.test(expression[i])) {
                num = num * 10 + parseInt(expression[i], 10);
                console.log(num)
                i++;
            }
            // đẩy số vừa chuyển dổi vào mảng values
            values.push(num);
        }
        // Nếu gặp dấu ngoặc mở đẩy vào operators
        else if (ch === '(') {
            operators.push(ch);
            i++;
        }
        // Nếu gặp dấu ngoặc đóng
        else if (ch === ')') {
            while (operators[operators.length - 1] !== '(') {
                values.push(applyOperator(operators, values));
                // console.log(values)
            }
            operators.pop();  // loại bỏ '('
            i++;
        }
        // Nếu là toán tử
        else if ('+-*/'.includes(ch)) {
            while (operators.length > 0 && precedence[operators[operators.length - 1]] >= precedence[ch]) {
                values.push(applyOperator(operators, values));
            }
            operators.push(ch);
            i++;
        }
    }

    // Áp dụng tất cả các toán tử còn lại
    while (operators.length > 0) {
        values.push(applyOperator(operators, values));
    }

    return values[0];
}

rl.question("Nhập một biểu thức toán học: ", (expression) => {
    try {
        const result = evaluateExpression(expression);
        console.log(`Kết quả: ${result}`);
    } catch (error) {
        console.log("Biểu thức không hợp lệ! Vui lòng nhập một biểu thức toán học hợp lệ.");
    }

    rl.close();
});
