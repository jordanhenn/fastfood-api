const express = require('express')
const path = require('path')
const CreationsService = require('./creations-service')

const CreationsRouter = express.Router()
const jsonBodyParser = express.json()

CreationsRouter
  .route('/')
  .get((req, res, next) => {
    CreationsService.getAllCreations(
      req.app.get('db'),
    )
      .then(creations => {
        res.json(creations)
      })
      .catch(next)
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { user_name, creation_name, price, bun_id, sauce_id, fillingone_id, fillingtwo_id, rating, number_of_ratings } = req.body
    const newCreation = { user_name, creation_name, price, bun_id, sauce_id, fillingone_id, fillingtwo_id, number_of_ratings }

    for (const [key, value] of Object.entries(newCreation))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
    })

    newCreation.rating = rating
    
    CreationsService.postCreation(
      req.app.get('db'),
      newCreation
    )
      .then(creation => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${creation.id}`))
          .json(creation)
      })
      .catch(next)
    })

CreationsRouter
    .route('/:creation_id')
    .all(checkCreationExists)
    .get((req, res) => {
      res.json(res.creation)
  })
    .put((req, res, next) => {
        const { newRating, newNumberOfRatings } = req.body
        CreationsService.updateRating(
            req.app.get('db'),
            res.creation.id,
            newRating,
            newNumberOfRatings
          )
          .then(creation => {
            res
              .status(204)
              .location(path.posix.join(req.originalUrl, `/${creation.id}`))
              .json(creation)
          })
          .catch(next)

    })
  
  async function checkCreationExists(req, res, next) {
    try {
      const creation = await CreationsService.getById(
        req.app.get('db'),
        req.params.creation_id
      )
  
      if (!creation)
        return res.status(404).json({
          error: `Creation doesn't exist`
      })
  
      res.creation = creation
      next()
    } catch (error) {
      next(error)
    }
  }

module.exports = CreationsRouter