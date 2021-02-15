require('dotenv').config();
const express = require('express');
const app = express();
//const checkEnvParams = require('./utils/checkEnvParams');
const bodyParser = require('body-parser');
const cors = require('cors');

const getTasks = require('./routes/tasks');



//checkEnvParams(["PORT", "HOST", "DB_PORT", "PASSWORD", "DATABASE"]);

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', getTasks);




app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port: ${process.env.PORT}`)
})