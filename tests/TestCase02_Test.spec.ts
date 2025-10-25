import {test , expect} from '@playwright/test'

test("Linkedin" , async({page})=>{

    await page.goto("https://www.linkedin.com/");
    await page.waitForLoadState();
    const title=await page.title();
    console.log(title);
    expect(title).toContain('LinkedIn');
})
