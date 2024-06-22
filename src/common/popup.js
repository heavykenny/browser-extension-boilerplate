// popup.js
console.log("Popup script loaded");

// openOptions
document.getElementById("openOptions").addEventListener("click", () => {
  chrome.runtime.openOptionsPage();
});
