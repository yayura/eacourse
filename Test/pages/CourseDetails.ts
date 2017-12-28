import { BasePage, IdentificationType } from "./BasePage";

const Locators = {
    Duration:{
        type:IdentificationType[IdentificationType.Xpath],
        value: "//ReleaseDate"
            }

}



export class CourseDetailPage extends BasePage{

    duration = this.ElementLocator(Locators.Duration);
    ClickDuration(){
        this.duration.click();
    }
}