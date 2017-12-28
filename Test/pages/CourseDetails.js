"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BasePage_1 = require("./BasePage");
var Locators = {
    Duration: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//ReleaseDate"
    }
};
var CourseDetailPage = /** @class */ (function (_super) {
    __extends(CourseDetailPage, _super);
    function CourseDetailPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.duration = _this.ElementLocator(Locators.Duration);
        return _this;
    }
    CourseDetailPage.prototype.ClickDuration = function () {
        this.duration.click();
    };
    return CourseDetailPage;
}(BasePage_1.BasePage));
exports.CourseDetailPage = CourseDetailPage;
//# sourceMappingURL=CourseDetails.js.map