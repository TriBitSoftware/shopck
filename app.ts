import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import bp from 'body-parser'

require("dotenv").config();

const app: Express = express()
import path from "path"
import routes from "./shopck-server/routes/routes";

const PORT: string | number = process.env.PORT || 4000

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)
app.use(express.static(path.join(__dirname, "shopck-web", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "shopck-web", "build", "index.html"));
});

const uri: string = `${process.env.MONGO_URI}`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(process.env.MONGODB_URI, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })