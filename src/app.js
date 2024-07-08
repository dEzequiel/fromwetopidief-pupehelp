import express from 'express';
import generatePdfWithPlaywright from './pdfGenerator.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());

// CORS Middleware
app.use(cors({
  origin: '*',
  credentials: true
}));

app.post('/generate-pdf', async (req, res) => {
    try {
        const pdfBuffer = await generatePdfWithPlaywright({ url: req.body.url });
        res.status(200)
           .set({
              "Content-Type": "application/pdf"
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
    console.log(`Example app listening on port ${port}`);
});
