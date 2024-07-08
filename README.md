# fromwetopidief-pupehelp

# Overview

The `generatePdfWithPlaywright` module is designed to generate PDF documents from web pages using the Playwright library. It navigates to a specified URL, removes header and footer elements from the page, and saves the rendered page as a PDF file.

The module leverages Playwright, a Node.js library for browser automation.

## Example 1: Basic Usage

```javascript
import generatePdfWithPlaywright from './generatePdfWithPlaywright.js';

const url = 'https://example.com';
generatePdfWithPlaywright({ url })
    .then(pdf => {
        console.log('PDF generated successfully:', pdf);
    })
    .catch(error => {
        console.error('Error generating PDF:', error);
    });
```

## Example 2: Handling errors

```javascript
import generatePdfWithPlaywright from './generatePdfWithPlaywright.js';

const url = 'https://invalid-url';
generatePdfWithPlaywright({ url })
    .then(pdf => {
        console.log('PDF generated successfully:', pdf);
    })
    .catch(error => {
        console.error('Failed to generate PDF:', error);
    });
```

# Getting Started

```
git clone github.com/dEzequiel/fromwetopidief-pupehelp
cd fromwetopidief-pupehelp/
npm install
npm start
```

# Testing 
```
npm test
npx playwright test
```
    