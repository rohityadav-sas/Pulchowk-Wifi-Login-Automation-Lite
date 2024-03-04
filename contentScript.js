chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  if (data.url.includes("8090")) {
    (async () => {
      username.value = 'yourusername';
      password.value = 'yourpassword';
      loginbutton.click();
      let loginFailed = document.getElementById('statusmessage');
      setTimeout(async () => {
        if (loginFailed.innerText.includes("maximum")) {
          username.value = 'raju';
          password.value = 'raju';
          loginbutton.click();
        };
      }, 1000);
    })();
  }
});
