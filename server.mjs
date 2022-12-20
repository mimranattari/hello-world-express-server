import express from 'express'
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send(res.ip+ ' Hello   World! ' +req.ip)
})

app.listen(port, () => {
  console.log(`Exam  eple app listening on port ${port}`)
}) 