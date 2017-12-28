"use strict";
var HomePage_1 = require('./pages/HomePage');
describe("Going to write first test", function () {
    //globally 
    var homePage = new HomePage_1.HomePage();
    it("should pass without any issue", function () {
        //open browser    
        homePage.OpenBrowser("http://localhost:8808/");
        //Get the headings 
        homePage.GetAllHeadings();
        //cLICK THE FIRST HEADING 
        homePage.ClickFirstHeading();
    });
    it("should not pass as the values are undefined", function () {
        var u = 1;
        expect(u).toBeDefined("Not definied");
    });
    it("Without any expectation", function () {
    });
});
//# sourceMappingURL=FirstTestSpec.js.map