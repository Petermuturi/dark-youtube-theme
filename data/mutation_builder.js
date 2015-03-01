console.error('------------start-----------------');
window.onload=setTimeout(function(){
    var target = document.getElementById('comments-test-iframe');

    if (target){
        var observer = new MutationObserver(function() {
//          mutations.forEach(function(mutation) {
            // console.error(mutation.type);
//            console.error('-----------callback-------->');
//          });
            console.error('blah');
        });
        // configuration of the observer:
        var config = { attributes: true, childList: true, characterData: true };
        // pass in the target node, as well as the observer options
        console.error('starting to observe');
        console.error(observer.observe(target, config));
    }else{
        console.error('------------>NO Node--------------');
    }
 }, 2000);
// function logURL(tab) {
//     console.error("fuck yeah\n\n");
//     var target = document.querySelector('#comments-iframe-container');
//     console.error('xxxxxxxxxx');
//     console.error(target);
//     // create an observer instance
//






// const { EventTarget } = require("sdk/event/target");
// let target = EventTarget();

// target.once('ready', function onReady() {
//   // Do the thing once ready!
//   alert("poato");
//   console.log('hahah');
// });


// select the target node
// require("sdk/tabs").on("ready", logURL);

// function logURL(tab) {
//   console.error("fuck yeah\n\n");
// }



// void observe( Node target, MutationObserverInit options );

// var head, link;

// head = document.getElementsByTagName('head')[0];
// link = document.createElement('link');
// link.id = "dark_theme";
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = self.data.url('comments.css');
// link.media = 'all';
// head.appendChild(link);

// }
