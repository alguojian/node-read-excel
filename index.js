var xlsx = require('node-xlsx')
var fs = require('fs');

// 解析得到文档中的所有 sheet
var sheets = xlsx.parse('./aaa.xlsx')

const list = []
// 遍历 sheet
sheets.forEach(function (sheet) {
  // console.log(sheet['name'])
  // 读取每行内容
  for(var rowId in sheet['data']){
      // console.log(rowId);
      var row=sheet['data'][rowId];
      const name = row[0]
      const product = row[1]
      const intro = row[2]
      list.push({
        name,
        product,
        intro
      })
  }
})
console.log(list)

fs.writeFile('./data.json', JSON.stringify(list), (err, data) => {

})
