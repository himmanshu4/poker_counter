import express from "express"
import morgan from 'morgan'
import Debug from "debug"
import { gameRouter } from "./routes/game"
const debug = Debug("poker_counter:root")
const app = express()
const PORT = process.env.PORT||3000
app.use(morgan('tiny'))
app.listen(3000, () => debug(`listening to port ${PORT}`))
app.use("/",gameRouter)
