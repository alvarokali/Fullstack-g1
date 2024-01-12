const express = require("express");
const session = require('express-session');
const morgan = require('./middlewares/morgan');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Hello World");
})

const usersRoutes = require("./routes/users.routes");


app.use('/api/', usersRoutes);


app.listen(PORT, () => {
    console.log(`>Listening on port: http://localhost:${PORT}`);
})
