const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello World from Express router....!`)
});

router.post('/register', (req, res) => {
    console.log(req.body)
    res.json({ message: req.body })
    // res.send(`My router register page`)
})

module.exports = router;