var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
pageMod.PageMod({
  include: ["https://www.youtube.*", "http://www.youtube.*"],
  contentStyleFile: self.data.url("dark.css"),
  contentScriptFile: self.data.url("mutation_builder.js"),
});

// --------------------------------WELCOME PAGE---------------------------------
// (function () {
//   var prefs = require("sdk/simple-prefs").prefs;
//   var timer = require("sdk/timers");
//   var tabs = require("sdk/tabs");
//   var version = prefs.version;

//   if (self.version !== version) {
//     timer.setTimeout(function () {
//       tabs.open({
//         url: "http://mybrowseraddon.com/dark-theme.html?v=" + self.version +
//         (version ? "&p=" + version + "&type=upgrade" : "&type=install"),
//         inBackground: false
//       });
//       prefs.version = self.version;
//     }, 3000);
//   }
// })();
// ------------------------------END WELCOME PAGE-------------------------------
