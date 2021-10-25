import { t } from "testcafe"
import Header from './header'

export async function setUp(){
    await t.navigateTo("https://testcafe.io/");

    await t.click(Header.docsLink);
}


