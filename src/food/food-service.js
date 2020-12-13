const FoodService = {
    getAllItems(db) {
        return db
          .from('fastfood_items')
          .select(
            'id',
            'item_name',
            'item_description',
            'price',
            'bun_id',
            'filling_id',
          )
          .orderBy('price', 'asc')
      },
      getAllBuns(db) {
        return db
          .from('fastfood_buns')
          .select(
            'id',
            'bun_name',
            'bun_description',
          )
      },
      getAllSauces(db) {
        return db
          .from('fastfood_sauces')
          .select(
            'id',
            'sauce_name',
            'sauce_description',
          )
      },
      getAllFillings(db) {
        return db
          .from('fastfood_fillings')
          .select(
            'id',
            'filling_name',
            'filling_description',
          )
      },
      getItemByName(db, name) {
        return FoodService.getAllItems(db)
          .where('item_name', name)
          .first()
      },
      getBunByName(db, name) {
        return FoodService.getAllBuns(db)
          .where('bun_name', name)
          .first()
      },
      getBunById(db, id) {
        return FoodService.getAllBuns(db)
          .where('id', id)
          .first()
      },
      getSauceByName(db, name) {
        return FoodService.getAllSauces(db)
          .where('sauce_name', name)
          .first()
      },
      getSauceById(db, id) {
        return FoodService.getAllSauces(db)
          .where('id', id)
          .first()
      },
      getFillingByName(db, name) {
        return FoodService.getAllFillings(db)
          .where('filling_name', name)
          .first()
      },
      getFillingById(db, id) {
        return FoodService.getAllFillings(db)
          .where('id', id)
          .first()
      }
    }
    
    module.exports = FoodService