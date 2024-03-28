const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const connection = require("./database/database");

const Game = require("./games/Game");

const GameController = require("./games/GameController");

connection.authenticate().then(() => {
    console.log("banco conetctado com sucesso");
}).catch(() => {
    console.log("Erro ao conectar ao banco");
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", GameController);


app.get("/", (req, res) => {
    res.sendStatus(200);
});

/* Lógica de criação da API de games usando um banco de dados ficticio com array e object 
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
        
    }
})

app.post("/game", (req, res) => {
    var {name, year, price} = req.body;

    if(!name || !year || !price){
        res.sendStatus(400);
    }else {
        DB.games.push({
            id: 4,
            name,
            year,
            price
        })
    }
    res.sendStatus(200);

});

app.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(404);
    }else {
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){//nao achou o índice do elemento, ou seja, o game não existe
            res.sendStatus(404);
        }else { //caso o game exista, ele apaga do array e retorna um status code 200: ok
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id", (req, res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.sendStatus(400);
    }else {
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);

        if(game){
            var {name, year, price} = req.body;

            if(name){
                game.name = name;
            }
            if(year){
                game.year = year;
            }
            if(price){
                game.price = price;
            }
            res.sendStatus(200);

        }else {
            res.sendStatus(404);
        }
    }
})*/

app.listen(4000, () => {
    console.log("API rodando!");
});