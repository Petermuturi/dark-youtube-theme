var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
pageMod.PageMod({
  include: "https://www.youtube.co*",
  contentStyleFile: require("sdk/self").data.url("dark.css")
});

pageMod.PageMod({
  include: "http://www.youtube.*",
  contentStyleFile: require("sdk/self").data.url("dark.css")
});
