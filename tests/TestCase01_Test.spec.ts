import {test , expect} from '@playwright/test'

test("Google" ,{tag:'@smoke'}, async({page})=>{

    await page.goto("https://www.google.com/");
    await page.waitForLoadState();
    const title=await page.title();
    console.log(title);
    expect(title).toContain('Google');
})
test("Facebook" , async({page})=>{

    await page.goto("https://www.facebook.com/");
    await page.waitForLoadState();
    const title=await page.title();
    console.log(title);
    expect(title).toContain('Facebook');
})
test("Instagram" , async({page})=>{

    await page.goto("https://www.instagram.com/");
    await page.waitForLoadState();
    const title=await page.title();
    console.log(title);
    expect(title).toContain('Instagram');
})