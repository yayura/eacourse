import * as fs from 'fs'
import { mkdirp } from 'mkdirp'
import * as report from 'cucumber-html-reporter'


const Cucumber = require('cucumber')
var unixTime = new Date().getTime();
export class CucumberReportExtension {


    private jsonDir = process.cwd() + "/reports/json";
    private htmlDir = process.cwd() + "/reports/html";
    private jsonFile = this.jsonDir + "/cucumber_report.json";
    private cucumberReporterOptions = {
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


    private CreateReportFile(dirName, fileName, fileContent) {
        //check if the dir is exist
        if (!fs.existsSync(dirName))
            mkdirp.sync(dirName);
        try {
            fs.writeFileSync(fileName, fileContent);
        }
        catch (message) {
            console.log("Failed to create File/Directory :" + message);
        }
    }

    private GenerateCucumberReport(CucumberReportOption) {
        report.generate(CucumberReportOption);
    }
    JsonFormatter = new Cucumber.JsonFormatter({
        log: jLog => {
            this.CreateReportFile(this.jsonDir, this.jsonFile, jLog);
            this.GenerateCucumberReport(this.cucumberReporterOptions);
        }
    });
}

export let JsonFormatter = new CucumberReportExtension().JsonFormatter;

