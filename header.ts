import { Selector } from "testcafe";
import { Service } from "./service";

class Header{
    docsLink;
    constructor(){
       this.docsLink = Selector('a')
       .withText(Service.getTranslationByKey('docs'));
    }
    
}

export default new Header();