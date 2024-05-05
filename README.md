
#### Description: The "Website Time Tracker" is a browser extension designed to help users monitor and manage their time spent on different websites. With this extension, users can track the amount of time they spend on each website they visit, allowing them to gain insights into their browsing habits and productivity.

The "Website Time Tracker" is a browser extension designed to help users monitor and manage their time spent on different websites. With this extension, users can track the amount of time they spend on each website they visit, allowing them to gain insights into their browsing habits and productivity.
Real-Time Tracking: The extension continuously monitors the user's browsing activity in real-time, accurately tracking the time spent on each website. Detailed Insights: Users can view detailed statistics and reports showing the total time spent on each website over a specific period.
Customizable Settings: Users have the flexibility to customize settings such as tracking intervals and display preferences to suit their individual needs. Data Persistence: Tracked time data is stored locally, ensuring that it remains accessible even after browser sessions or system restarts.
User-Friendly Interface: The extension provides a clean and intuitive user interface, making it easy for users to view and manage their tracked time data. Productivity Improvement:
By gaining insights into their browsing habits, users can identify time-wasting websites and take steps to minimize distractions, leading to increased productivity. Time Management: The extension helps users become more mindful of how they allocate their time online, empowering them to make informed decisions about their digital activities.
Goal Tracking: Users can set goals for themselves, such as limiting the time spent on certain websites or increasing productivity during specific time periods, and use the extension to monitor their progress. The "Website Time Tracker" extension is ideal for anyone who wants to better understand and manage their online activities, including students, professionals, freelancers, and anyone else who spends significant time browsing the web.Platforms: The extension is available for popular web browsers such as Google Chrome and Mozilla Firefox, providing cross-platform compatibility for a wide range of users.

manifest.json:
This file serves as the manifest for the extension, providing metadata and configuration details.
It specifies permissions required by the extension, such as access to tabs and storage.
It defines background scripts, content scripts, and other necessary components.
Additionally, it includes icons and other assets used by the extension.
background.js:
This script acts as the background script for the extension, running continuously in the background.
It initializes the trackedTimeMap object to store the tracked time data.
The chrome.runtime.onInstalled event listener is used to load tracked time data from local storage when the extension is installed or updated.
The chrome.tabs.onUpdated event listener is responsible for capturing tab update events, such as when a new webpage is loaded or an existing webpage is refreshed.
Inside the event listener, the script extracts the website name from the tab URL, updates the tracked time data, and saves it to local storage.
The saveTrackedTimeToStorage function is responsible for saving the tracked time data to local storage.
The getWebsiteName function extracts the website name from a given URL.
popup.html:
This HTML file defines the structure of the extension popup.
It contains a container element (<div id="trackedTimeList">) where the tracked time data will be displayed.
popup.js:
This script controls the behavior of the extension popup.
The DOMContentLoaded event listener waits for the popup HTML to be fully loaded before executing the script.
Inside the event listener, the script retrieves the tracked time data from local storage using chrome.storage.local.get.
Upon receiving the tracked time data, the updateTrackedTimeList function is called to update the popup UI with the latest data.
The chrome.runtime.onMessage event listener listens for messages from the background script indicating updates to the tracked time data. When a message is received, the updateTrackedTimeList function is called to update the UI accordingly.
popup.css:
This CSS file contains styles to enhance the appearance of the extension popup.
It defines styles for various elements such as the container, titles, tracked time items, and overall layout.
The styles aim to create a visually appealing and user-friendly interface for the extension.
content.js:
This script is a content script that can be injected into web pages if needed (not utilized in the provided example).
Content scripts have access to the content of web pages and can manipulate them as needed.
They are commonly used to interact with web pages, capture specific events, or modify page elements based on user actions or extension functionality.

The design is purposefully simple and unassuming. It is designed to be used while attention is focused elsewhere, should provide a quick update and then allow the user to return to their activity.

The choices made for developing this app are appropriate for several reasons:

Background Script for Continuous Monitoring:
Using a background script allows the extension to continuously monitor the user's browsing activity even when the popup is closed or the browser window is minimized. This ensures accurate tracking of time spent on websites without interruption.
Real-Time Updates with Message Passing:
Real-time updates of tracked time data in the popup are achieved through message passing between the background script and the popup script. This approach ensures that the popup always displays the latest tracked time data without the need for manual refreshes.
Local Storage for Data Persistence:
Tracked time data is stored locally using the chrome.storage.local API. Storing data locally ensures that the tracked time data persists across browser sessions and system restarts, providing a seamless user experience.
Clean and Intuitive User Interface:
The UI design of the extension popup is clean, intuitive, and visually appealing. It presents the tracked time data in a clear and organized manner, making it easy for users to understand their browsing habits and track their productivity.
Minimal Intrusion with Content Scripts (Optional):
While not utilized in the provided example, the inclusion of a content script allows the extension to interact with web pages if needed. Content scripts provide flexibility for additional functionalities, such as capturing specific events or modifying page elements, without intruding on the user's browsing experience.
Privacy and Security Considerations:
The extension prioritizes user privacy and security by only tracking browsing activity locally on the user's device and not collecting any personally identifiable information. This ensures that user data remains private and secure at all times.
Overall, these choices contribute to the effectiveness, usability, and privacy of the "Website Time Tracker" app, aligning with the goal of helping users monitor and manage their time spent on websites in a convenient and secure manner.

