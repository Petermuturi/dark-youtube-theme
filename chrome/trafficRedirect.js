chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        // console.log("This is a first install!");
        window.open('http://nicu03.github.io/?new-install=chrome','_blank');
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        window.open('http://nicu03.github.io/?install=chrome&update-from='+details.previousVersion+'&to='+ thisVersion, '_blank');
        // console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});
