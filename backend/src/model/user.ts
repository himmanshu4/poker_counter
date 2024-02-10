import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password_hash: DataTypes.DATE,
});
User.sync()