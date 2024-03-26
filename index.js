const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var DB = {
    games: [
        {
            id: 1,
            name: "Prince of Persia",
            year: 2013,
            price: 300
        },
        {
            id: 2,
            name: "FIFA",
            year: 2024,
            price: 350
        },
        {
            id: 3,
            name: "Minecraft",
            year: 2012,
            price: 200
        }
    ]
}


app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id", (req, res) => {
    var id = req.params.id;

    if(isNaN(req.params.id)){//caso o id seja diferente de um número, ele retornará o erro de status 400
        res.sendStatus(400);
    }else{//caso o id seja um número
        id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id); //buscando game pelo id do parãmetro
        
        if(game){//caso o game seja encontrado
            res.statusCode = 200
            res.json(game);
        }else{//caso o game não seja encontrado
            res.sendStatus(404);
        }
        

        res.sendStatus(400);
    }


})

app.listen(4000, () => {
    console.log("API rodando!");
});