import express from 'express';
import generatePdf from './generatePdf.js';
import getTripNameFromUrl from './utils/getTripName.js';
import checkYourttooDomain from './middlewares/checkYourttooDomain.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = 3000;

app.use(express.json());
app.use(checkYourttooDomain)

app.post('/pdf', async (req, res) => {
    try {
        const pdfBuffer = await generatePdf(req.body.programUrl);
        res.status(200)
           .set({
              "Content-Type": "application/pdf",
              "Content-Disposition": `attachment; filename=${getTripNameFromUrl(req.body.programUrl)}_itinerario.pdf`
           })
           .end(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`PDFGenerator Service running on port ${port}`);
});

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });
