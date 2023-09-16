var express = require("express");
require('dotenv').config()
const PORT = process.env.PORT
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const db = require('./models');
const cors = require('cors'); // Import the cors middleware

const corsOptions = {
    origin: 'http://localhost:8080', // Set the allowed origin (use '*' for any)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
    credentials: true, // Allow sending cookies and HTTP authentication
    optionsSuccessStatus: 204, // Set the status code for successful preflight requests
  };

  app.use(cors(corsOptions));


// Sync Database Without Dropping Table Data
// db.sequelize.sync({alter : true}).then(() => {
//   console.log("Synced db.");
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",router)

app.listen(PORT,()=>{
    console.log("listening on port http://localhost:"+PORT+"/")
})