// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getViewportHeight") {
      // Respond with the viewport height
      sendResponse({ viewportHeight: window.innerHeight });
  } else if (request.scrollPage) {
      // If a scroll request is received, scroll to the specified height
      window.scrollTo(0, request.scrollHeight);
  }
  // Ensure the sendResponse callback is invoked asynchronously by returning true
  return true;
});
