chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "capturePage") {
        capturePage();
    }
});

function capturePage() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: "getViewportHeight" }, (response) => {
        if (chrome.runtime.lastError || !response) {
          console.error("Error getting viewport height:", JSON.stringify(chrome.runtime.lastError, null, 2));
          return;
        }
        const viewportHeight = response.viewportHeight;
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            func: () => document.body.scrollHeight,
        }, (results) => {
            if (chrome.runtime.lastError || !results) {
                console.error("Error executing script:", chrome.runtime.lastError);
                return;
            }
            let maxScrollHeight = results[0].result;
            scrollAndCapture(activeTab, 0, maxScrollHeight, viewportHeight);
        });
    });
    });
}

function scrollAndCapture(tab, scrollHeight, maxScrollHeight, scrollStep) {
    if (scrollHeight < maxScrollHeight) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (height) => window.scrollTo(0, height),
            args: [scrollHeight],
        }, () => {
            if (chrome.runtime.lastError) {
                console.error("Error scrolling:", chrome.runtime.lastError);
                return;
            }
            setTimeout(() => {
                chrome.tabs.captureVisibleTab(null, { format: 'png' }, (dataUrl) => {
                    if (chrome.runtime.lastError) {
                        console.error("Error capturing:", chrome.runtime.lastError);
                        return;
                    }
                    // Handle the captured image, e.g., save it to storage.
                    console.log(dataUrl);
                    scrollAndCapture(tab, scrollHeight + scrollStep, maxScrollHeight, scrollStep); // Recursive call
                });
            }, 1000); // Adjust timing as necessary
        });
    } else {
        console.log('Capture complete.');
    }
}
