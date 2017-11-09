var system = require('system');
var page = require('webpage').create();

page.onError = function(msg, trace) {
};

page.open(system.args[1], function()
{
    console.log(page.content);
    phantom.exit();
});
