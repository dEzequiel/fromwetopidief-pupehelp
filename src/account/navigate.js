export default async function navigate(page, programUrl) {
    await page.goto(programUrl) // Go to the program URL
    await page.waitForLoadState('networkidle')
    await page.waitForLoadState('domcontentloaded');
    await applyStylesToPage(page); // Apply styles to the page to remove unnecessary elements
}

async function applyStylesToPage(page) {
    await page.emulateMedia({ media: 'screen' });
    await page.addStyleTag({
        content: `
            header, footer {
                display: none !important;
            }
            
            header[ng-init="frontview='img-cover'"] {
                display: block !important;
            }

            .col-md-3.ng-scope[ng-include="viewer.callactionurl"][ng-show="ispublished"] {
                display: none !important;
            }

            section.product-map.hidden-xs {
                display: none !important;
            }

            section.product-resume.max-center-sm.info-block.hidden-sm.hidden-xs.bg-light.ng-scope {
                display: none !important;
            }
            section.price-total.padded-b.text-center.ng-scope {
                display: none !important;
            }
            h4.mb-xxl.iblock {
                display: none !important;
            }

            section[ng-show="ispublished"] {
                display: none !important;
            }

            section.main-description.mt-l.row.hidden-xs.ng-scope[name="category"] {
                display: none;
            }

            button.btn.btn-xs.btn-success {
                display: none !important;
            }

            div.olark-button-focus-wrapper {
                display: none !important;
            }
            body {
                background-color: white !important;
            }
        `
    });
}
