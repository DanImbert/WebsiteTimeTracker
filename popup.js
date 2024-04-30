document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get(['trackedTimeMap'], function(result) {
    const trackedTimeMap = result.trackedTimeMap || {};
    updateTrackedTimeList(trackedTimeMap);
  });
});

function updateTrackedTimeList(trackedTimeMap) {
  const trackedTimeListElement = document.getElementById('trackedTimeList');
  trackedTimeListElement.innerHTML = ''; // Clear previous entries

  if (Object.keys(trackedTimeMap).length === 0) {
    const noDataMessage = document.createElement('p');
    noDataMessage.textContent = 'No tracked time data available.';
    trackedTimeListElement.appendChild(noDataMessage);
  } else {
    Object.entries(trackedTimeMap).forEach(([website, time]) => {
      const listItem = document.createElement('div');
      listItem.textContent = `${website}: ${formatTime(time)}`;
      trackedTimeListElement.appendChild(listItem);
    });
  }
}

// Function to format time
function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}

// Function to pad number with leading zeros
function pad(number) {
  return (number < 10 ? '0' : '') + number;
}
