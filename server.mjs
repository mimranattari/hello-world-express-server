import express,{ urlencoded } from 'express'; 
 import  cors from 'cors';
 import  dotenv from 'dotenv';  
 dotenv.config();
 const app = express();

const port=process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send(res.ip+ ' Hello   World! ' +req.ip)
})

app.listen(port, () => {
  console.log(`Exam  eple app listening on port ${port}`)
}) 