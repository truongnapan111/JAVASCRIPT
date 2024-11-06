const fs = require('fs');

function TemplateString(filePath, params, outputPath) {
    // Đọc nội dung file template
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Loi:", err)
            return
        }
        // Thay thế các {{key}} trong file bằng giá trị trong params
        let result = data
        for (const [key, value] of Object.entries(params)) {
            const r = new RegExp(`{{${key}}}`, 'g')
            result = result.replace(r, value)
        }

        // Ghi nội dung mới vào file output
        fs.writeFile(outputPath, result, 'utf8', (err) => {
            if (err) {
                console.error("Loi:", err)
                return
            }
            console.log(`Da luu ${outputPath}`)
        });
    });
}


TemplateString('template.txt', { name: 'Jonny' }, 'output.txt');
TemplateString('template.html', { title: 'Search of skill', pageTitle: 'Home page', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, consectetur' }, 'output.html');
