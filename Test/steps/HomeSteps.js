"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var HomePage_1 = require("../pages/HomePage");
var chai_1 = require("chai");
var CourseDetails_1 = require("../pages/CourseDetails");
cucumber_1.defineSupportCode(function (_a) {
    var Given = _a.Given, When = _a.When, Then = _a.Then;
    var homePage = new HomePage_1.HomePage();
    var courseDetails = new CourseDetails_1.CourseDetailPage();
    Given(/^I navigate to application$/, function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homePage.OpenBrowser("http://localhost:8808/")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    When(/^I get all the heading$/, function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homePage.GetAllHeadings()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    When(/^I click the '([^\"]*)' course$/, function (headingText) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homePage.ClickFirstHeading(headingText.toString())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    Then(/^I should see '([^\"]*)' course in coursedetails page$/, function (course) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            chai_1.expect(courseDetails.GetCourseheading).to.be.not.null;
            return [2 /*return*/];
        });
    }); });
    Then(/^I should see all course information in coursedetails page$/, function (table) { return __awaiter(_this, void 0, void 0, function () {
        var localTable;
        return __generator(this, function (_a) {
            localTable = [
                ['Selenium', '2'],
                ['Java', '4']
            ];
            table.rows().forEach(function (element) {
                console.log(element);
            });
            chai_1.assert.deepEqual(localTable, table.rows(), "the data does not matches with the step def!");
            console.log(table.rows() + "Assert OK!!!");
            return [2 /*return*/];
        });
    }); });
    When(/^I enter test in search from external data source$/, function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homePage.EnterDataInSearchFromExcel()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=HomeSteps.js.map