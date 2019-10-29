const express = require('express');
const sequelize = require('../db');
const router = express.Router();
const Plant = sequelize.import('../models/plant');
const validateSession = require('../middleware/validate-session')

router.post('/myplant', validateSession, (req, res) => {

       var plantname = req.body.plant.plantname;
       var dateplanted = req.body.plant.dateplanted;
       var where = req.body.plant.where;
       var sun = req.body.plant.sun;
       var alive = req.body.plant.alive;
       var soil = req.body.plant.soil;
       var notes = req.body.plant.notes
    
    Plant.create({
        plantname: plantname,
        dateplanted: dateplanted,
        where: where,
        sun: sun,
        alive: alive,
        soil: soil,
        notes: notes
    })
    .then(plant => res.status(200).json(plant))
    .catch(err => res.json(err))
}),

router.get('/myplant', validateSession, (req, res) => {
    Plant.findAll()
        .then(plant => res.status(200).json(plant))
        .catch(err => res.status(500).json({
            error: err
        }))
})

router.get('/:id', validateSession, (req, res) => {
    Plant.findOne({
        where: {
            id: req.params.id
        } 
    }).then(plant => res.status(200).json(plant))
      .catch(err => res.json(err))  
})

router.put('/:id', validateSession, (req, res) => {
    Plant.update(req.body, {
         where: { 
          id: req.params.id 
        }
     })
     .then(plant => res.status(200).json(plant))
     .catch(err => res.json({
          error: err
       }))
          console.log(req);
 })


router.delete('/:id', validateSession, (req, res) => {
    Plant.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(plant => res.status(200).json(plant))
    .catch(err => res.json({
        error: err
    }))
})


module.exports = router;