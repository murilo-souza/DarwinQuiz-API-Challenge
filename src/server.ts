import  express  from "express";
import cors from 'cors'
import quizzesData from './data.json'


const app = express();
app.use(express.json())
app.use(cors());


app.get('/quizzes', (req, res) => {
  res.json(quizzesData);
});


app.listen(3333)