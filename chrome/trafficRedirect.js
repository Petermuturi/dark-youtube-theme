chrome.runtime.onInstalled.addListener(function(details){
    window.open('http://nicu03.github.io/?platform=chrome&v=' +
                 chrome.runtime.getManifest().version +
                 (details.reason == "update" ? "&p=" + details.previousVersion +
                  "&type=upgrade" : "&type=install"),
                 '_blank');

    // if(details.reason == "install"){
    //     window.open('http://nicu03.github.io/?platform=chrome
    //         &type=install', '_blank');
    // }else if(details.reason == "update"){
    //     var thisVersion = chrome.runtime.getManifest().version;
    //     window.open('http://nicu03.github.io/?platform=chrome
    //         &v='+ details.previousVersion + '&p=' + thisVersion +
    //         '&type=upgrade"', '_blank');
    // }
});
