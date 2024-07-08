import { chromium } from "playwright/test";

export default async function generatePdf({url}) {
    const browser = await chromium.launch({
        headless: true,
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.emulateMedia({ media: 'screen' });

    const pdf = await page.pdf({ path: 'page.pdf', format: 'A4', printBackground: true});
    await browser.close();
    
    return pdf;
}