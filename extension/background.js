console.log("I am background.js");

let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
  console.log("Hello %cWorld", "color: #ff3300");
});

chrome.runtime.onMessageExternal.addListener(function (
  message,
  sender,
  sendResponse
) {
  console.log("onMessageExternal.addListener", message, sender, sendResponse);
});
