
//字符串转base64
export function encode(str){
  // 对字符串进行编码
  var encode = encodeURI(str);
  // 对编码的字符串转化base64
  var base64 = btoa(encode);
  return base64;
}

// base64转字符串
export function decode(base64){
  // 对base64转编码
  var decode = atob(base64);
  // 编码转字符串
  var str = decodeURI(decode);
  return str;
}


  /**
   * desc: base64对象转blob文件对象
   * @param urlData  ：数据的base64对象
   * @param type  ：类型 png,pdf,doc,mp3等;
   * @returns {Blob}：Blob文件对象
   */
  function base64ToBlob(urlData, type) {
    let arr = urlData.split(',');
    let array = arr[0].match(/:(.*?);/);
    let mime = (array && array.length > 1 ? array[1] : type) || type;
    // 去掉url的头，并转化为byte
    let bytes = window.atob(arr[1]);
    // 处理异常,将ascii码小于0的转换为大于0
    let ab = new ArrayBuffer(bytes.length);
    // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], {
      type: mime
    });
  }

  /**
   * desc: 下载导出文件
   * @param blob  ：返回数据的blob对象或链接
   * @param fileName  ：下载后文件名标记
   * @param fileType  ：文件类 word(docx) excel(xlsx) ppt等
   */
  function downloadExportFile(blob, fileName, fileType) {
    let downloadElement = document.createElement('a');
    let href = blob;
    if (typeof blob == 'string') {
      downloadElement.target = '_blank';
    } else {
      href = window.URL.createObjectURL(blob); //创建下载的链接
    }
    downloadElement.href = href;
    downloadElement.download = fileName + '.' + fileType; //下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); //触发点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    if (typeof blob != 'string') {
      window.URL.revokeObjectURL(href); //释放掉blob对象
    }
  }

    /**
     * desc: base64转文件并下载
     * @param base64 {String} : base64数据
     * @param fileType {String} : 要导出的文件类型png,pdf,doc,mp3等
     * @param fileName {String} : 文件名
     */
   export function downloadFile(base64,fileName,fileType) {
      let typeHeader = 'data:application/' + fileType + ';base64,' // 定义base64 头部文件类型
      let converedBase64 = typeHeader + base64;  // 拼接最终的base64
      let blob = base64ToBlob(converedBase64, fileType)  // 转成blob对象
      downloadExportFile(blob, fileName, fileType) // 下载文件
    }

    //downloadFile('你的base64数据','download','.pdf');
