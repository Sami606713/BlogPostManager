import express from 'express'
import router from './routes/BlogRouter.js'
import ConnectDb from './config/config.js'

const app = express()
const port = 3000

app.use(express.json()) // Middleware to parse JSON bodies
app.use("/api/blog",router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
  ConnectDb()
})
