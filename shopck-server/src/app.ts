import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import routes from "./routes/routes"
const bp = require('body-parser')

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)


const uri: string = `${process.env.MONGO_URI}`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect("mongodb+srv://tribit_proxy_user:uM3JLpGJr58GeVf@cluster0.j6oly.mongodb.net/Shop_Ck", options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })