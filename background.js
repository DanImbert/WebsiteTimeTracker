let trackedTimeMap = {};

// Load tracked time data from storage on extension startup
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.get(['trackedTimeMap'], function(result) {
    trackedTimeMap = result.trackedTimeMap || {};
  });
});

// Listen for tab update events
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    const websiteName = getWebsiteName(tab.url);
    if (websiteName) {
      trackedTimeMap[websiteName] = trackedTimeMap[websiteName] || 0;
      if (tab.active) {
        trackedTimeMap[websiteName]++;
      }
      saveTrackedTimeToStorage();
    }
  }
});

// Start tracking time periodically
setInterval(function() {
  chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function(tab) {
      const websiteName = getWebsiteName(tab.url);
      if (websiteName) {
        trackedTimeMap[websiteName] = trackedTimeMap[websiteName] || 0;
        if (tab.active) {
          trackedTimeMap[websiteName]++;
        }
      }
    });
    saveTrackedTimeToStorage();
  });
}, 1000);

// Save tracked time data to storage
function saveTrackedTimeToStorage() {
  chrome.storage.local.set({ 'trackedTimeMap': trackedTimeMap }, function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
      // Handle the error gracefully
    }
  });
}

// Function to get website name from URL
function getWebsiteName(url) {
  if (!url) return null;
  try {
    let domain = new URL(url).hostname.replace('www.', '');
    return domain.split('.')[0];
  } catch (error) {
    console.error('Error occurred while getting website name:', error.message);
    return null;
  }
}
