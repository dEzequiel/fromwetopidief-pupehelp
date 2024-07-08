import { getDomainName } from "./utils/getDomainName.js";

import { chromium } from "playwright/test";

import { fileURLToPath } from 'url';
import { dirname, join, normalize } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pdfsFolders = join(__dirname, '.', 'pdfs');

export default async function generatePdfWithPlaywright({url}) {
    let browser;
    
    try {
        browser = await chromium.launch({
            headless: true,
        });

        const page = await browser.newPage();
        await page.goto(url);
        await page.emulateMedia({ media: 'screen' });
        await page.addStyleTag({
            content: `
                header, footer {
                    display: none !important;
                }
            `
        });

        const pathToSavePdf = normalize(pdfsFolders + '/' + getDomainName(url) + '.pdf');
        const pdf = await page.pdf({ path: pathToSavePdf, format: 'A4', printBackground: true});
        return pdf;
    } catch(error) {
        console.error("Error generating PDF:", error);
    } finally {
        await browser.close();
    }

    
}

