const dotenv = require('dotenv')
const express = require('express')

const app = express()

dotenv.config({ path: "../config.env" });
require('../db/conn');
app.use(express.json())
app.use(require('../router/userRouter'))
const UserModel = require("../model/userSchema")
const PORT = process.env.PORT;

const middleware = (req, res, next) => {
    console.log(`Hello from middleware..!`)
    next();
}

// app.get('/', (req, res) => {
//     res.send(`Hello World from Express!`)
// });

app.get('/about', (req, res) => {
    res.send(`About-Me page...`)
});

app.get('/contact', (req, res) => {
    res.send(`Contact Us Page.....`)
});

app.get('/signin', (req, res) => {
    res.send(`Hello login, this is sign-in page...`)
});

app.get('/signup', (req, res) => {
    res.send(`Hello registration, this is signup page....`)
})

app.listen(5000, () => {
    console.log(`Server Started running at ${PORT}`)
});