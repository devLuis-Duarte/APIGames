const express = require("express");
const router = express.Router();
const Game = require("./Game");

router.post("/game", (req, res) => {
    var {name, year, price} = req.body;

    if(name && year && price){
        Game.create({
            name: name,
            year: year,
            price: price
        }).then(() => {
            res.sendStatus(200);
        })
    }else {
        res.sendStatus(400);
    }
});

router.get("/games", (req, res) => {
     Game.findAll().then((games) => {
        res.status(200).json(games);

    });
});

router.get("/game/:id", (req, res) => {
    var id = req.params.id;

    if(!isNaN(id)){
        id = parseInt(req.params.id);

        Game.findOne({
            where: {
                id: id
            }
        }).then((game) => {
            res.status(200).json(game);
        })
    }else {
        res.sendStatus(404);
    }
});

router.delete("/game/:id", (req, res) => {
    var id = req.params.id;

    if(!isNaN(id)){
        id = parseInt(req.params.id);

        Game.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.sendStatus(200);
        })
    }else {
        res.sendStatus(404);
    }
}); 

router.put("/game/:id", (req, res) => {
    var id = req.params.id;
    var {name, year, price} = req.body;

    if(!isNaN(id)){
        id = parseInt(req.params.id);

        if(name || year || price){
            Game.update({
                name: name,
                year: year,
                price: price
            }, {
                where: {
                    id: id
                }
            }).then(() => {
                res.sendStatus(200);
            })
        }else {
            res.sendStatus(400);
        }
    }else {
        res.sendStatus(404)
    }
})

module.exports = router;