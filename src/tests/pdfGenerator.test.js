import getPDFContents from '../utils/getPDFContents.js';
import { test, expect } from '@playwright/test';

let pdfContents;
test.describe('assert PDF contents using Playwright', () => {
    test.beforeAll(async () => {
        pdfContents = await getPDFContents('./tests/pdf_sample.pdf')
    });

    test('pdf file should have 2 pages', async () => {
        expect(pdfContents.Pages.length, 'The pdf should have 2 pages').toEqual(2);
    });
})

