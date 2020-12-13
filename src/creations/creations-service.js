const CreationsService = {
    getAllCreations(db) {
      return db
        .from('fastfood_creations')
        .select(
          'id',
          'creation_name',
          'user_name',
          'price',
          'rating',
          'number_of_ratings',
          'date_crated',
          'bun_id',
          'fillingOne_id',
          'fillingTwo_id',
          'sauce_id',
        )
        .orderBy('date_created', 'asc')
    },
    getById(db, id) {
    return CreationsService.getAllItems(db)
        .where('id', id)
        .first()
    },
    postCreation(db, newCreation) {
      return db
        .insert(newCreation)
        .into('fastfood_creations')
        .returning('*')
        .then(([creation]) => creation)
        .then(creation =>
          CreationsService.getById(db, creation.id)
        )
    },
    updateRating(db, id, newRating, newNumberofRatings) {
        return db('fastfood_creations')
          .where('id', id)
          .update({
              rating: newRating,
              number_of_ratings: newNumberofRatings
          }, ['id', 'creation_name', 'user_name', 'price', 'rating', 'number_of_ratings', 'date_created', 'bun_id', 'fillingOne_id', 'fillingTwo_id', 'sauce_id'])
      }
  }
  
  module.exports = CreationsService