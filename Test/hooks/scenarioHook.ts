import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { config } from '../steps/config';
import { JsonFormatter } from '../reporting/CucumberReportExtension';


///handler
defineSupportCode(({ registerHandler, registerListener }) => {

    registerHandler('BeforeFeature', async () => {

        console.log("Executing before feature!!");
    });

    registerHandler('BeforeScenario', async () => {
        await browser.get(config.baseUrl);
    });
    registerHandler('AfterScenario', async () => {
        console.log("Scenario Executed!!");


    });


    registerHandler('AfterFeature', async () => {
        console.log("Executing after feature!!");
        await browser.close();

    });

    registerListener(JsonFormatter);


});