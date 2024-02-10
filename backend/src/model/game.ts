import { DataTypes } from 'sequelize';
import { sequelize as sequelizeDb } from '../config/database';

export const Game = sequelizeDb.define('Game', {
  name: DataTypes.STRING,
  start: DataTypes.DATE,
  totalMoney: DataTypes.NUMBER,
});
export interface GameInterface{
  name:string,
  start:Date,
  totalMoney:number
}
Game.sync()