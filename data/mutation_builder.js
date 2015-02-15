console.error('------------start-----------------');
window.onload=function(){
    var target = document.getElementById('comments-test-iframe');

    if (target){
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            // console.error(mutation.type);
            console.error('------------------->');
          });
        });
        // configuration of the observer:
        var config = { attributes: true, childList: true, characterData: true };
        console.error('------------no cracks-----------------');
        // pass in the target node, as well as the observer options
        observer.observe(target, config);
        console.error('------------no cracks-----------------');
    }else{
        console.error('------------>NO Node--------------');
    }
 };
console.error('------------end-----------------\n\n');
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
