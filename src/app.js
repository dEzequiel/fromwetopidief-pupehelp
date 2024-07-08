import express from 'express';
import generatePdf from './utils/generatePdf.js';
const app = express();
const port = 3000;

app.use(express.json());

app.use("/generate-pdf", async (req, res) => {
    const pdfBuffer = await generatePdf({url: req.body.url});
    res.status(200)
    .set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/pdf"})
    .end(pdfBuffer);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})