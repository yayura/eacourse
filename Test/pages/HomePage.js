"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import the class
var protractor_1 = require("protractor");
var HomePage = /** @class */ (function () {
    function HomePage() {
        //Selenium framework development course
        this.heading = protractor_1.element(protractor_1.by.xpath("//course-thumb/div/h2[test()='Selenium']"))
            .element(protractor_1.by.xpath("//span[constains(text(),'4th')]"));
        //All heading  
        this.headings = protractor_1.$(".well.hoverwell.thumbnail > h2");
    }
    //Open browser 
    HomePage.prototype.OpenBrowser = function (url) {
        protractor_1.browser.get(url);
    };
    HomePage.prototype.GetAllHeadings = function () {
        this.headings.getText().then(function (text) {
            console.log("The heading is :" + text);
        });
    };
    HomePage.prototype.ClickFirstHeading = function () {
        this.heading.click();
    };
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map