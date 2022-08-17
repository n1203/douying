export function sendMessageToContentScript(message: any, callback: Function) {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs: any) {
      chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
        if (callback) callback(response);
      });
    }
  );
}
