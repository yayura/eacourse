Feature: To work with home page

@smoke
Scenario: Click course of application

   And I get all the heading
   And I click the 'Selenium framework development' course
   Then I should see 'Selenium framework development' course in coursedetails page

@smoke
Scenario: Click course of application second time

   And I get all the heading
   And I click the 'Selenium framework development' course
   Then I should see 'Selenium framework development' course in coursedetails page