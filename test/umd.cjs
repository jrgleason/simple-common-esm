// WTF
global.window = global;
var DoSomething = require("../dist/sce-umd.js").DoSomething;
(function(){
    var instance = new DoSomething();
    instance.doSomethingElse();
})()
