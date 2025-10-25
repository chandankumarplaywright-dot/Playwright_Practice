import {test , expect} from '@playwright/test'

test("Myntra" , async({page})=>{

    await page.goto("https://www.myntra.com/");
    await page.waitForLoadState();
    const title=await page.title();
    console.log(title);
    expect(title).toContain('Myntra');
})
