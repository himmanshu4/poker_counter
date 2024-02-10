import { Router} from "express"
import bodyParser from "body-parser"
import { allGames, newGame } from "../controller/gameController"

export const gameRouter = Router()
gameRouter.use(bodyParser.urlencoded())
gameRouter.post('/', newGame)
gameRouter.get('/', allGames)
gameRouter.delete("/",deleteGame)