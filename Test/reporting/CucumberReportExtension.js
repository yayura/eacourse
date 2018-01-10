"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var mkdirp_1 = require("mkdirp");
var report = require("cucumber-html-reporter");
var Cucumber = require('cucumber');
var unixTime = new Date().getTime();
var CucumberReportExtension = /** @class */ (function () {
    function CucumberReportExtension() {
        var _this = this;
        this.jsonDir = process.cwd() + "/reports/json";
        this.htmlDir = process.cwd() + "/reports/html";
        this.jsonFile = this.jsonDir + "/cucumber_report.json";
        this.cucumberReporterOptions = {
            theme: 'bootstrap',
            jsonFile: this.jsonFile,
            //output: this.htmlDir + "/cucumber-reporter-" + unixTime + ".html",
            output: this.htmlDir + "/cucumber-reporter.html",
            reportSuiteAsScenarios: true,
            //launchReport: true,
            metadata: {
                "App Version": "0.0.1",
                "Test Environment": "TEST",
                "Browser": "Chrome  63.0.3239",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Local"
            }
        };
        this.JsonFormatter = new Cucumber.JsonFormatter({
            log: function (jLog) {
                _this.CreateReportFile(_this.jsonDir, _this.jsonFile, jLog);
                _this.GenerateCucumberReport(_this.cucumberReporterOptions);
            }
        });
    }
    CucumberReportExtension.prototype.CreateReportFile = function (dirName, fileName, fileContent) {
        //check if the dir is exist
        if (!fs.existsSync(dirName))
            mkdirp_1.mkdirp.sync(dirName);
        try {
            fs.writeFileSync(fileName, fileContent);
        }
        catch (message) {
            console.log("Failed to create File/Directory :" + message);
        }
    };
    CucumberReportExtension.prototype.GenerateCucumberReport = function (CucumberReportOption) {
        report.generate(CucumberReportOption);
    };
    return CucumberReportExtension;
}());
exports.CucumberReportExtension = CucumberReportExtension;
exports.JsonFormatter = new CucumberReportExtension().JsonFormatter;
//# sourceMappingURL=CucumberReportExtension.js.map