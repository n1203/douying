chrome.devtools.panels.create(
  '抖音直播助手',
  null, // No icon path
  'index.html',
  null // no callback needed
);
if(window.chrome && chrome.devtools){
  // chrome.devtools.network.onNavigated.addListener(function(request) {
  //   console.log(request.response);
  // });
  chrome.devtools.network.onRequestFinished.addListener(function(request) {
    chrome.devtools.network.getHAR((HAR => {
    }))
    request.getContent((content) => {
      chrome.runtime.sendMessage({ type: "network", data: {
          request: request.request,
          content
        }
      })
    })
  });

  chrome.devtools.network.getHAR((HAR => {
    console.log('%cMyProject%cline:22%cHAR', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(251, 178, 23);padding:3px;border-radius:2px', HAR)
  }))

  chrome.devtools.network.HARLog
  console.log('%cMyProject%cline:26%cchrome.devtools.network.HARLog', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(229, 187, 129);padding:3px;border-radius:2px', chrome.devtools.network.HARLog)
}