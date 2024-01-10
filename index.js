const express = require("express");
const session = require('express-session');
const morgan = require('./middlewares/morgan');
const cors = require('cors')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;
const usersRoutes = require("./routes/users.routes");


app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Cross Origin Resource Sharing
const whitelist = ['https://www.deployedfront.com', 'http://127.0.0.1:5173', 'http://localhost:3000']; //Add deployed front
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback (null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))


app.get("/", (req,res)=>{
    res.send("Hello World");
})

//Routes
app.use('/api/', usersRoutes);


app.all('*', (req, res) => {
    res.status(404).send("404 - Page not found")
})

app.listen(PORT, () => {
    console.log(`>Listening on port: http://localhost:${PORT}`);
})
