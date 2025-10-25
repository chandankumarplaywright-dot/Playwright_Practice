import {test , expect} from '@playwright/test'
import { TIMEOUT } from 'dns';

test("Gmail" , async({page})=>{

    await page.goto("https://www.gmail.com/");
    const title=await page.title();
    console.log(title);
    expect(title).toContain('Gmail');
})
test("Yahoo" , async({page})=>{

    await page.goto("https://www.Yahoo.com/" ,{timeout:6000 , waitUntil:'load'});
    const title=await page.title();
    console.log(title);
    expect(title).toContain('Yahoo');
})
test("Outlook" , async({page})=>{

    await page.goto("https://www.outlook.in/");
    await page.waitForLoadState();
    const title=await page.title();
    console.log(title);
    expect(title).toContain('Outlook');
})