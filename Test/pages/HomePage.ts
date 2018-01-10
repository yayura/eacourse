//import the class
import { browser, element, by, $, $$ } from 'protractor';
import { IdentificationType, BasePage } from './BasePage';
import * as json from 'load-json-file';
import {ExcelUtil} from '../utilities/ExecelUtil';


const Locators = {
    heading: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//course-thumb/div/h2[text()=' Selenium Framework development ']"
    },
    headings: {
        type: IdentificationType[IdentificationType.Css],
        value: ".well.hoverwell.thumbnail > h2"

    },
    searchText: {
        type: IdentificationType[IdentificationType.Css],
        value: "[class='form-control']"
    }

}
export class HomePage extends BasePage {
    //Selenium framework development course
    heading = this.ElementLocator(Locators.heading).element(by.xpath("//span[constains(text(),'4th')]"));


    //All heading  
    headings = this.ElementLocator(Locators.headings);

    //Search Textbox
    searchText = this.ElementLocator(Locators.searchText);

    //Open browser 
    async OpenBrowser(url: string) {
        await browser.get(url);
    }

    async  GetAllHeadings() {
        await this.headings.getText().then((text) => {
            console.log("The heading is :" + text)
        });
    }
    async ClickFirstHeading(heading: string) {
        console.log("Can I print the input value from StepDefenition, if yes, this is it " + heading);
        await this.headings.click();

    }
    async EnterDataInSearchFromJson() {
        await json("./data.json").then((x) => {
            console.log(x);
            this.searchText.sendKeys((<any>x).SearchValue);
        });
    }
    async EnterDataInSearchFromExcel() {
        let sheet =<SearchData>ExcelUtil.ReadExcelSheet("./Data.xlsx");
       
        //console.log((<any>sheet).SearchValue);
        
        // this.searchText.sendKeys((<any>sheet).SearchValue);
        console.log(sheet.SearchValue);
        this.searchText.sendKeys(sheet.SearchValue);
    }
}

interface SearchData {
    SearchValue : string,
    Coursetitle: string,
    Duration: string
}