import { browser, element, by, $, $$ } from 'protractor';
export enum IdentificationType {
    Id,
    ClassName,
    Css,
    Xpath,
    LinkText,
    Js
}

export class BasePage {


    ElementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Css]:
                return element(by.css(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return element(by.xpath(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return element(by.js(obj.value));
            case IdentificationType[IdentificationType.Js]:
                return element(by.linkText(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return element(by.linkText(obj.Id));
            default:
                break;
        }
    }
}