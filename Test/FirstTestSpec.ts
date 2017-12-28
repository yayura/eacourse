import { browser, element, by, $, $$ } from 'protractor';

describe("Going to write first test", () => {

    it("should pass without any issue", () => {
        
    });

    it("should not pass as the values are undefined", () =>{
        let u=1;
        expect(u).toBeDefined("Not definied");
    })

    it("Without any expectation", () =>{

    })

});