const express = require('express')
const FoodService = require('./food-service')
const jsonBodyParser = express.json()

const FoodRouter = express.Router()

FoodRouter
  .route('/')
  .get((req, res, next) => {
    FoodService.getAllItems(req.app.get('db'))
      .then(items => {
        res.json(items)
      })
      .catch(next)
})

FoodRouter
  .route('/items')
  .get((req, res, next) => {
    const { item_name } = req.query
    FoodService.getItemByName(req.app.get('db'), item_name)
      .then(item => {
        res.json(item)
      })
      .catch(next)
})


FoodRouter
  .route('/buns')
  .get((req, res, next) => {
    const { bun_name } = req.query
    FoodService.getBunByName(req.app.get('db'), bun_name)
      .then(bun => {
        res.json(bun)
      })
      .catch(next)
  })

FoodRouter
  .route('/sauces')
  .get((req, res, next) => {
    const { sauce_name } = req.query
    FoodService.getSauceByName(req.app.get('db'), sauce_name)
      .then(sauce => {
        res.json(sauce)
      })
      .catch(next)
  })

FoodRouter
  .route('/fillings')
  .get((req, res, next) => {
    const { filling_name } = req.query
    FoodService.getFillingByName(req.app.get('db'), filling_name)
      .then(sauce => {
        res.json(sauce)
      })
      .catch(next)
  })


FoodRouter
  .route('/buns/:bun_id')
  .all(checkBunExists)
  .get((req, res) => {
    res.json(res.bun)
  })

FoodRouter
  .route('/sauces/:sauce_id')
  .all(checkSauceExists)
  .get((req, res) => {
    res.json(res.sauce)
  })

FoodRouter
  .route('/fillings/:filling_id')
  .all(checkFillingExists)
  .get((req, res) => {
    res.json(res.filling)
})

async function checkBunExists(req, res, next) {
  try {
    const bun = await FoodService.getBunById(
      req.app.get('db'),
      req.params.bun_id
    )

    if (!bun)
      return res.status(404).json({
        error: `Bun doesn't exist`
    })

    res.bun = bun
    next()
  } catch (error) {
    next(error)
  }
}

async function checkSauceExists(req, res, next) {
    try {
      const sauce = await FoodService.getSauceById(
        req.app.get('db'),
        req.params.sauce_id
      )
  
      if (!sauce)
        return res.status(404).json({
          error: `Sauce doesn't exist`
      })
  
      res.sauce = sauce
      next()
    } catch (error) {
      next(error)
    }
  }

async function checkFillingExists(req, res, next) {
    try {
      const filling = await FoodService.getFillingById(
        req.app.get('db'),
        req.params.filling_id
      )
  
      if (!filling)
        return res.status(404).json({
          error: `Filling doesn't exist`
      })
  
      res.filling = filling
      next()
    } catch (error) {
      next(error)
    }
  }

module.exports = FoodRouter