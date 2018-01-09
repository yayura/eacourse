import { BasePage, IdentificationType } from "./BasePage";
///// 1111111  define locators 
const Locators = {
    Duration: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//ReleaseDate"
    },
    courseHeading: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//h2"
    }

}



export class CourseDetailPage extends BasePage {
      
////////////222222222 define vars locators
    duration = this.ElementLocator(Locators.Duration);
    courseHeading = this.ElementLocator(Locators.courseHeading);

///////3333333333333333    
    ClickDuration() {
        this.duration.click();
    }
    
    async GetCourseheading (){
        await this.courseHeading;
    }
}