matchMedia("(prefers-color-scheme: dark)").addListener(({ matches }) => {
  if (matches) {
    chrome.runtime.sendMessage({ scheme: "dark" });
  } else {
    chrome.runtime.sendMessage({ scheme: "light" });
  }
});
