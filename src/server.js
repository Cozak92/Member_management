import express from 'express';
import bodyParser from 'body-parser';
import mainRouter from './routers/mainRouter.js'
import routes from './routes.js'


const app = express();
const PORT = process.env.Port || 5000;


app.use('/image', express.static( './upload'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use(routes.api, mainRouter);




const handelListening = () => {
    console.log(`✅  Listening on : http://localhost:${PORT}`)
}

app.listen(PORT,handelListening);