// class Workbook {
//     SheetNames: any[];
//     Sheets: any;

//     constructor() {
//         this.SheetNames = [];
//         this.Sheets = {};
//     }
// }

// const download = (url:any, name:any) => {
//     let a = document.createElement('a')
//     a.href = url
//     a.download = name
//     a.click()

//     window.URL.revokeObjectURL(url)
// }

// function s2ab(s:any) {
//     const buf = new ArrayBuffer(s.length)

//     const view = new Uint8Array(buf)

//     for (let i=0; i !== s.length; ++i)
//         view[i] = s.charCodeAt(i) & 0xFF

//     return buf
// }

// const exportToExcel2 = (data:any , fileName:string = "import") => {
//     import('xlsx').then(XLSX => {
//         const wb = new Workbook()
//         const ws = XLSX.utils.json_to_sheet(data)

//         wb.SheetNames.push('')
//         wb.Sheets[''] = ws

//         const wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'})

//         let url = window.URL.createObjectURL(new Blob([s2ab(wbout)], {type:'application/octet-stream'}))

//         download(url, `${fileName}.xlsx`);
//     })
// }

// export default exportToExcel2;

export {}