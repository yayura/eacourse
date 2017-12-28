import { browser, element, by, $, $$ } from 'protractor';
import { HomePage } from './pages/HomePage';
describe("Going to write first test", () => {

    //globally 
    var homePage = new HomePage();


    
    it("should pass without any issue", () => {
        //open browser    
        homePage.OpenBrowser("http://localhost:8808/");
        //Get the headings 
        homePage.GetAllHeadings();
        //cLICK THE FIRST HEADING 
        homePage.ClickFirstHeading();
    });

    it("should not pass as the values are undefined", () =>{
        let u=1;
        expect(u).toBeDefined("Not definied");
    })

    it("Without any expectation", () =>{

    })

});