chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.tabs.sendMessage(tabId, { url: tab.url, status: changeInfo.status });
});

chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  if (data.closeTab === 'yes') {
    chrome.tabs.remove(sender.tab.id);
  }
});