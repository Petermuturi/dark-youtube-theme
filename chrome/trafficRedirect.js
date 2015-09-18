chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        window.open('http://nicu03.github.io/?platform=chrome&v=' + 
        chrome.runtime.getManifest().version + 
        "&type=install",
        '_blank')
    }else if(details.reason == "update"){
        window.open('http://nicu03.github.io/?platform=chrome&v=' + 
        chrome.runtime.getManifest().version +
        '&p=' + details.previousVersion +
        '&type=upgrade"',
        '_blank');
    }
    
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
