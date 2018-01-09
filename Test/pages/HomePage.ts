//import the class
import { browser, element, by, $, $$ } from 'protractor';
import { IdentificationType, BasePage } from './BasePage';

const Locators = {
    heading:{
        type:IdentificationType[IdentificationType.Xpath],
        value: "//course-thumb/div/h2[text()=' Selenium Framework development ']"
    },
    headings:{
        type:IdentificationType[IdentificationType.Css],
        value: ".well.hoverwell.thumbnail > h2"

    }

}
export class HomePage extends BasePage{
    //Selenium framework development course
    heading = this.ElementLocator(Locators.heading).element(by.xpath("//span[constains(text(),'4th')]"));
     
     
    //All heading  
    headings= this.ElementLocator(Locators.headings);

    //Open browser 
    async OpenBrowser(url: string){
        await browser.get(url);
    }

    async  GetAllHeadings(){
        await this.headings.getText().then((text)=>{
        console.log("The heading is :" + text)
    });
    }
    async ClickFirstHeading(){
        await this.headings.click();

    }
}