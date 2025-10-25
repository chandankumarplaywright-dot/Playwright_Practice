import {test , expect} from '@playwright/test'

test("Flipkart" , async({page})=>{

    await page.goto("https://www.flipkart.com/");
    await page.waitForLoadState();
    const title=await page.title();
    console.log(title);
    expect(title).toContain('Online');
})
