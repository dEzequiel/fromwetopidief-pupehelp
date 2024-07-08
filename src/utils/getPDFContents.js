import PDFParser from "pdf2json"; 

export default async function getPDFContents(pdfFilePath) {
    const pdfParser = new PDFParser();

    // wait for the dataReady event
    const pdfData = await new Promise((resolve, reject) => {
        
        // handle error during parsing
        pdfParser.on('pdfParser_dataError', (errData) => {
            console.error('Error parsing PDF:', errData.parserError);
            reject(new Error('Error parsing PDF: ' + errData.parserError));
        });

        pdfParser.on('pdfParser_dataReady', (pdfData) => {
            resolve(pdfData);
        });

        try {
            pdfParser.loadPDF(pdfFilePath);
        } catch (error) {
            console.error('Error loading PDF:', error);
            reject(new Error('Error loading PDF: ' + error.message));
        }
    });

    return pdfData;
}