import  express  from "express";
import cors from 'cors'
import quizzesData from './data.json'


const app = express();
app.use(express.json())
app.use(cors());


app.get('/quizzes', (req, res) => {
  res.json(quizzesData.quizzes);
});


app.get('/quizzes/:quizTitle', (req, res) => {
  const { quizTitle } = req.params;
  const quizTitleLower = quizTitle.toLowerCase();

  const quiz = quizzesData.quizzes.find(q => q.title.toLowerCase() === quizTitleLower);

  if (!quiz) {
    res.status(404).json({ error: 'Quiz not found' });
  } else {
    res.json(quiz);
  }
});

app.listen(3333)