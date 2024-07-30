

const yourttooUrl = "https://www.yourttoo.com";
export default async function login(page) {

    await page.goto(yourttooUrl);

    await page.click('a[ng-click="openlogin(\'affiliate\')"]');
    await page.waitForLoadState('load');
    
    const username = process.env.LOGIN_EMAIL;
    const password = process.env.LOGIN_PASSWORD;
    
    await page.fill('#inputUsername', username);
    await page.fill('#inputPasswordLogin', password);

    await page.click('button.btn-login-action');
    await page.waitForURL("**/home");
}

