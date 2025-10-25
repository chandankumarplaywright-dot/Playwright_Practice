import {test , expect} from '@playwright/test'

test("Amazon" , async({page})=>{

    await page.goto("https://www.amazon.com/");
    await page.waitForLoadState();
    const title=await page.title();
    console.log(title);
    expect(title).toContain('Amazon');
})
