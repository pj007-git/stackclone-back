const Sequelize = require("sequelize");
require("dotenv").config();

var sequelize = new Sequelize(
    process.env.DB_DATABASE,// DATABASE NAME
    process.env.DB_USERNAME,//DB_USER NAME
    process.env.DB_PASSWORD, // DB_USER PASSWORD
  {
    host: process.env.DB_HOST, //DB_HOST NAME
    port: process.env.DB_PORT,
    dialect: process.env.DB_dialect,
    pool: {
      max: parseInt(process.env.DB_POOL_MAX),
      min: parseInt(process.env.DB_POOL_MIN),
      acquire: process.env.DB_ACQUIRE,
      idle: process.env.DB_IDLE,
    },
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection has been established successfully with database",
      process.env.DB_DATABASE
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./user.model')(sequelize,Sequelize);


module.exports = db


