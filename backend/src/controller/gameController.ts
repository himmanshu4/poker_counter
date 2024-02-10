import { RequestHandler } from "express"
import { Game, GameInterface } from "../model/game"

export const allGames: RequestHandler = async (req, res, next) => {
    const games = await Game.count();
    res.send(games.toString())
}

export const newGame: RequestHandler = async (req, res, next) => {
    const { name="unnamed", totalMoney=6 } = req.body
    
    const gameInput: GameInterface = {
        name: name,
        start: new Date(),
        totalMoney: totalMoney,
    }
    const game = await Game.create({ ...gameInput })
    res.send("New Game Created")
    next(null)
}

export const deleteGame:RequestHandler=(req,res)=>{
    
}