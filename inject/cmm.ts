import {encode, downloadFile} from './utils'

const ExportCSV = (data) => {
  const blob = new Blob([data], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `蝉妈妈-${new Date().toLocaleDateString()}.csv`);
  link.click();
};

let result = [];
const tbodyData = Array.from(document.querySelector('tbody').querySelectorAll('tr'))
let T = null
export function getCMMData(index = 0) {
  T = setTimeout(() => {
    clearTimeout(T)
    const element = tbodyData[index]
    if (index >= tbodyData.length) {
      return ExportCSV([
        Array.from(document.querySelectorAll('thead')[1].querySelectorAll('th')).map(o =>o.innerText).join(','),
        ...result,
      ].join(`
`))
    }
    tbodyData[index + 1] && tbodyData[index + 1]?.querySelector('span.fs14.font-weight-400')?.click()
    const tds = Array.from(element.querySelectorAll('td')).map(v =>v.innerText)
    result.push(tds.join(','))
    getData(index + 1);
  }, 100);
}

export function getCMMDataWord(index = 0) {
  T = setTimeout(() => {
    clearTimeout(T)
    const element = tbodyData[index]
    if (index >= tbodyData.length) {
      return downloadFile(encode(result.join(`
`)), `蝉妈妈-${new Date().toLocaleDateString()}`, '.doc')
    }
    tbodyData[index + 1] && tbodyData[index + 1]?.querySelector('span.fs14.font-weight-400')?.click()
    const tds = Array.from(element.querySelectorAll('td')).map(v =>v.innerText)
    result.push(tds?.pop())
    getData(index + 1);
  }, 100);
}



