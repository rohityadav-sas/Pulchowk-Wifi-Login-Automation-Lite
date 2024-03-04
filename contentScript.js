chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  if (data.url.includes("8090") && data.status === "complete") {
    (async () => {
      username.value = '079bct070';
      password.value = '2022-2890';
      loginbutton.click();
      setTimeout(async () => {
        let statusmessage = document.getElementById('statusmessage');
        console.log(statusmessage.innerText)
        if (statusmessage.innerText.includes("maximum") || statusmessage.innerText.includes("failed")) {
          console.log("WORK")
          username.value = 'raju';
          password.value = 'raju';
          loginbutton.click();
        };
      }, 1500);
    })();
  }
  else if (data.status === "loading" || data.status === undefined) {
    if (loginbutton.innerText.includes('logout')) {
      chrome.runtime.sendMessage({ closeTab: 'yes' });
    }
  }
});
