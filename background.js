
// chrome.storage.local.set({ "website": "wix" }, function() { console.log("done") });
// let blockUrls=["wix"];
// chrome.storage.local.get(["website"], function (result) {
//     url=result.website;
// });

// chrome.declarativeNetRequest.updateDynamicRules({
//     addRules: [{
//         "id" : 1001,
//         "priority": 1,
//         "action" : { "type" : "block" },
//         "condition" : {
//           "urlFilter" : url,
//           "resourceTypes" : [
//             'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
//             'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
//           ]
//         }
//       }],
//     removeRuleIds: [1001]
// })

// blockUrls.forEach((domain, index) => {
//     let id = index + 1;

//     chrome.declarativeNetRequest.updateDynamicRules(
//        {addRules:[{
//           "id": id,
//           "priority": 1,
//           "action": { "type": "block" },
//           "condition": {"urlFilter": domain, "resourceTypes": ["main_frame"] }}
//          ],
//          removeRuleIds: [id]
//        },
//     )
// })