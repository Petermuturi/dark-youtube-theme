chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        window.open('http://nicu03.github.io/?platform=chrome&v=' +
        chrome.runtime.getManifest().version +
        "&type=install",
        '_blank')
    }else if(details.reason == "update"){
        if (chrome.runtime.getManifest().version != details.previousVersion) {
            window.open('http://nicu03.github.io/?platform=chrome&v=' +
            chrome.runtime.getManifest().version +
            '&p=' + details.previousVersion +
            '&type=upgrade',
            '_blank');
        }
    }
});
