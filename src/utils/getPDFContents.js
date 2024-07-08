import PDFParser from "pdf2json"; 

export default async function getPDFContents(pdfFilePath) {
    let pdfParser = new PDFParser();
    return new Promise((resolve, reject) => {
        pdfParser.on('pdfParser_dataError', (errData) =>
            reject(errData.parserError)
        );
        pdfParser.on('pdfParser_dataReady', (pdfData) => {
            resolve(pdfData);
        });
    
        pdfParser.loadPDF(pdfFilePath);
    });
    }