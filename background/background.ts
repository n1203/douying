function handleMessageFromDevToolsPage(message, sender, sendResponse) {
  console.log('来自devtools-page的消息', message)
}
// 处理链接请求，接收到channel的另一端: port2
chrome.runtime.onConnect.addListener(function (port2) {
  if(port2.name === 'devtools-page') {
    console.log('来自devtools-page的连接')
    port2.onMessage.addListener(handleMessageFromDevToolsPage)
  }
})