import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

let port = 7777;
let app = express();

app.listen(port, console.log(`Server listening on ${port}`))

app.get("/", (req, res) => {
    res.send("Hello world")
})
