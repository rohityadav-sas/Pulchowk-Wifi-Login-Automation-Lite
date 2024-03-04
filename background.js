chrome.tabs.onUpdated.addListener(listener);
let temp = true;
function listener(tabId, changeInfo, tab) {
  if (tab.url.includes("successful") && temp) {
    chrome.tabs.remove(tabId);
    temp = false;
    setTimeout(() => {
      temp = true;
    }, 500);
  } else if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { url: tab.url });
  }
}