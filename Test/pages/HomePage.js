"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//import the class
var protractor_1 = require('protractor');
var BasePage_1 = require('./BasePage');
var Locators = {
    heading: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//course-thumb/div/h2[text()=' Selenium Framework development ']"
    },
    headings: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".well.hoverwell.thumbnail > h2"
    }
};
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        _super.apply(this, arguments);
        //Selenium framework development course
        this.heading = this.ElementLocator(Locators.heading).element(protractor_1.by.xpath("//span[constains(text(),'4th')]"));
        //All heading  
        this.headings = this.ElementLocator(Locators.headings);
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
        this.headings.click();
    };
    return HomePage;
}(BasePage_1.BasePage));
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map