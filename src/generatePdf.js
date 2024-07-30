
import { readFileSync } from 'fs';
import { chromium } from "playwright/test";

import login from './account/login.js';
import navigate from './account/navigate.js';


export default async function generatePdf(programUrl) {
    let browser;
    try {
        browser = await chromium.launch({
            headless: true,
            args: [
                // Use with caution!
                '--no-sandbox',
                '--disable-setuid-sandbox',
              ]
        });

        //#region Page navigation
        const page = await browser.newPage();

        await login(page); // login to yourttoo.com
        await navigate(page, programUrl); // navigate to the program URL
        //#endregion

        const templateHeader = readFileSync('./templates/template-header.html', 'utf-8')
        const templateFooter = readFileSync('./templates/template-footer.html', 'utf-8')

        //#region PDF generation
        const pdf = await page.pdf({ 
            format: 'A4', 
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate: templateHeader,
            footerTemplate: templateFooter,
            margin: {
                top: '40px',
                bottom: '40px'
        },
        });
        //#endregion

        return pdf;
    } catch(error) {
        console.error("Error generating PDF:", error);
    } finally {
        await browser.close();
    }
}


