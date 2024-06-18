// background.js
browser.browserAction.onClicked.addListener((tab) => {
  console.log(`${tab.id}`);
});