chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getViewportHeight") {
    // Respond with the viewport height
    sendResponse({ viewportHeight: window.innerHeight });
  }
  return true;
});
