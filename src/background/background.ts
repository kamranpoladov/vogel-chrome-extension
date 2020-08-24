chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "chrome://newtab" });
});

chrome.runtime.onMessage.addListener((request) => {
  switch (request.scheme) {
    case "dark":
      chrome.browserAction.setIcon({
        path: {
          "16": "public/logo2-16.png",
          "48": "public/logo2-48.png",
          "128": "public/logo2-128.png",
        },
      });
      break;
    case "light":
      chrome.browserAction.setIcon({
        path: {
          "16": "public/logo16.png",
          "48": "public/logo48.png",
          "128": "public/logo128.png",
        },
      });
      break;
    default:
      break;
  }
});
