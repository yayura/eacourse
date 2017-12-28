//import the class
import { browser, element, by, $, $$ } from 'protractor';

export class HomePage{
    //Selenium framework development course
    heading = element(by.xpath("//course-thumb/div/h2[test()='Selenium']"))
                        .element(by.xpath("//span[constains(text(),'4th')]"))
     
     
    //All heading  
    headings=$(".well.hoverwell.thumbnail > h2");

    //Open browser 
    OpenBrowser(url: string){
        browser.get(url);
    }

    GetAllHeadings(){
        this.headings.getText().then((text)=>{
        console.log("The heading is :" + text)
    });
    }
    ClickFirstHeading(){
        this.heading.click();

    }
}