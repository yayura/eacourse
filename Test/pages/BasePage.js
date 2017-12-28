"use strict";
var protractor_1 = require('protractor');
(function (IdentificationType) {
    IdentificationType[IdentificationType["Id"] = 0] = "Id";
    IdentificationType[IdentificationType["ClassName"] = 1] = "ClassName";
    IdentificationType[IdentificationType["Css"] = 2] = "Css";
    IdentificationType[IdentificationType["Xpath"] = 3] = "Xpath";
    IdentificationType[IdentificationType["LinkText"] = 4] = "LinkText";
    IdentificationType[IdentificationType["Js"] = 5] = "Js";
})(exports.IdentificationType || (exports.IdentificationType = {}));
var IdentificationType = exports.IdentificationType;
var BasePage = (function () {
    function BasePage() {
    }
    BasePage.prototype.ElementLocator = function (obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return protractor_1.element(protractor_1.by.js(obj.value));
            case IdentificationType[IdentificationType.Js]:
                return protractor_1.element(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return protractor_1.element(protractor_1.by.linkText(obj.Id));
            default:
                break;
        }
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map