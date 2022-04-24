let active_btn = document.getElementsByClassName("active_btn")[0];

chrome.storage.sync.get("color", ({ color }) => {
  active_btn.style.backgroundColor = color;
});

active_btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

function setPageBackgroundColor() {
  console.log("setPageBackgroundColor");
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgorundColor = color;
  });
}
