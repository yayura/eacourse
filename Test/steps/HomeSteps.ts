import { defineSupportCode } from 'cucumber'
import { HomePage } from '../pages/HomePage';
import { expect } from 'chai';
import { CourseDetailPage } from '../pages/CourseDetails';
import { browser } from 'protractor';

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


});