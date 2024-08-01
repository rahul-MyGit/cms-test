const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json());
app.use('/api' , routes);

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is runnning at ${PORT}`);
});