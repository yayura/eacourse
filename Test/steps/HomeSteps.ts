import { defineSupportCode, TableDefinition } from 'cucumber'
import { HomePage } from '../pages/HomePage';
import { expect, assert } from 'chai';
import { CourseDetailPage } from '../pages/CourseDetails';
import { browser } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';

defineSupportCode(({ Given, When, Then }) => {

    var homePage = new HomePage();
    var courseDetails = new CourseDetailPage();


    Given(/^I navigate to application$/, async () => {
        await homePage.OpenBrowser("http://localhost:8808/");
    });

    When(/^I get all the heading$/, async () => {
        await homePage.GetAllHeadings();
    });

    When(/^I click the '([^\"]*)' course$/, async (headingText) => {
        await homePage.ClickFirstHeading(headingText.toString());

    });

    Then(/^I should see '([^\"]*)' course in coursedetails page$/, async (course) => {
        expect(courseDetails.GetCourseheading).to.be.not.null;
    });

    Then(/^I should see all course information in coursedetails page$/, async (table: TableDefinition) => {
        let localTable = [
            [ 'Selenium', '2' ], 
            [ 'Java', '4' ]
        ]
        table.rows().forEach(element => {
            console.log(element);
        });

        assert.deepEqual(localTable, table.rows(), "the data does not matches with the step def!");
        console.log(table.rows()+"Assert OK!!!"); 
        
    });

    When (/^I enter test in search from external data source$/, async ()=> {
        await homePage.EnterDataInSearchFromExcel();
    });

});