import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.Port || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/hello', (req,res) => {
    res.send({message: 'Hello express'})

})

const handelListening = () => {
    console.log(`✅  Listening on : http://localhost:${PORT}`)
}

app.listen(PORT,handelListening);