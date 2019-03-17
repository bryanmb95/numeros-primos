var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const controleDePrimos = require("./controleDePrimos");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", function(req, res) {
    res.send("Your server is running on port 3000.");
})
app.post("/somar-numero", function(req, res) {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const numeros = controleDePrimos.testarSoma(num1, num2)

    res.json(numeros)

})

app.post("/testar-primo", function(req, res) {
    const num1 = req.body.num1
    const numeros = controleDePrimos.testarPrimo(num1)
    res.json(numeros)

})



app.listen(3000);
console.log("The server is running!");