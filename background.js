let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set({ color });
//     // %c ?
//     console.log('Default background color set to %cgreen', `color: ${color}`);
// });

// // Called when the user clicks on the action.
// chrome.action.onClicked.addListener(function (tab) {
//     // No tabs or host permissions needed!
//     console.log(tab);
//     console.log('Turning ' + tab.url + ' red!');
// });

// chrome.tabs.onActivated.addListener((activeInfo) => {
//     console.log('onActivated', activeInfo);
// });

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     console.log('onUpdated', tabId, changeInfo, tab)
// });


chrome.notifications.create({
    // step1: set type = "test", you will got
    // Uncaught TypeError: Error in invocation of notifications.create(optional string notificationId, notifications.NotificationOptions options, 
    // optional function callback): Error at parameter 'options': Error at property 'type': Value must be one of basic, image, list, progress.
    // type: 'test',


    // step2: when changed type to 'basic', you will got
    // Unchecked runtime.lastError: Some of the required properties are missing: type, iconUrl, title and message.
    // type: 'basic',


    // step3: set iconUrl to valid value
    // type: 'basic',
    // iconUrl: './images/get_started128.png',
    // title: 'qwe',
    // message: 'asd',
})