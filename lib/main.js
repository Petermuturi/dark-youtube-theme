var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
pageMod.PageMod({
  include: ["https://www.youtube.*", "http://www.youtube.*"],
  contentStyleFile: self.data.url("dark.css")
});
