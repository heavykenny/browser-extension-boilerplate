// background.js
const browser = typeof chrome !== 'undefined' ? chrome : browser;

console.log("Background script running...");

// Example of handling an event
browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
