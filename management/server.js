import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.Port || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id' : 1,
            'avatar' : "https://placeimg.com/64/64/1",
            'name' : '신승혁',
            'birthday' : '920323',
            'gender' : '남자',
            'loaction' : ' 서울',
            'job' : "취업 준비생"
        },
        {
            'id' : 2,
            'avatar' : "https://placeimg.com/64/64/2",
            'name' : '신승혁',
            'birthday' : '920323',
            'gender' : '남자',
            'loaction' : ' 서울',
            'job' : "취업 준비생"
          },
          {
            'id' : 3,
            'avatar' : "https://placeimg.com/64/64/3",
            'name' : '신승혁',
            'birthday' : '920323',
            'gender' : '남자',
            'loaction' : ' 서울',
            'job' : "취업 준비생"
            }
      ]);

})

const handelListening = () => {
    console.log(`✅  Listening on : http://localhost:${PORT}`)
}

app.listen(PORT,handelListening);