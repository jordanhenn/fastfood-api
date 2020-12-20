const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Food Endpoints', function() {
  let db

  const {
    testBuns,
    testSauces,
    testFillings,
    testItems
  } = helpers.makeFastFoodFixtures()

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

describe(`GET /api/food/buns`, () => {
    beforeEach('insert buns', () =>
      helpers.seedBunsTable(
        db,
        testBuns,
      )
    )

    it(`gets bun by name`, function() {
      const testBun = testBuns[0]
      return supertest(app)
        .get(`/api/food/buns?bun_name=${testBun.bun_name}`)
        .expect(200)
        .expect(res => {
          expect(res.body).to.eql(testBun)
        })
  })
})

describe(`GET /api/food/buns/:bun_id`, () => {
    beforeEach('insert buns', () =>
      helpers.seedBunsTable(
        db,
        testBuns,
      )
    )
  it(`gets bun by id`, function() {
    const testBun = testBuns[0]
    return supertest(app)
      .get(`/api/food/buns/${testBun.id}`)
      .expect(200)
      .expect(res => {
        expect(res.body).to.eql(testBun)
      })
})
})

describe(`GET /api/food/sauces`, () => {
    beforeEach('insert sauces', () =>
      helpers.seedSaucesTable(
        db,
        testSauces,
      )
    )

    it(`gets sauce by name`, function() {
      const testSauce = testSauces[0]
      return supertest(app)
        .get(`/api/food/sauces?sauce_name=${testSauce.sauce_name}`)
        .expect(200)
        .expect(res => {
          expect(res.body).to.eql(testSauce)
        })
  })
})

describe(`GET /api/food/sauces/:sauce_id`, () => {
    beforeEach('insert sauces', () =>
      helpers.seedSaucesTable(
        db,
        testSauces,
      )
    )
  it(`gets sauce by id`, function() {
    const testSauce = testSauces[0]
    return supertest(app)
      .get(`/api/food/sauces/${testSauce.id}`)
      .expect(200)
      .expect(res => {
        expect(res.body).to.eql(testSauce)
      })
})
})

describe(`GET /api/food/fillings`, () => {
    beforeEach('insert fillings', () =>
      helpers.seedFillingsTable(
        db,
        testFillings,
      )
    )

    it(`gets filling by name`, function() {
      const testFilling = testFillings[0]
      return supertest(app)
        .get(`/api/food/fillings?filling_name=${testFilling.filling_name}`)
        .expect(200)
        .expect(res => {
          expect(res.body).to.eql(testFilling)
        })
  })
})

describe(`GET /api/food/fillings/:filling_id`, () => {
    beforeEach('insert fillings', () =>
      helpers.seedFillingsTable(
        db,
        testFillings,
      )
    )
  it(`gets filling by id`, function() {
    const testFilling = testFillings[0]
    return supertest(app)
      .get(`/api/food/fillings/${testFilling.id}`)
      .expect(200)
      .expect(res => {
        expect(res.body).to.eql(testFilling)
      })
})
})

describe(`GET /api/food/`, () => {
    beforeEach('insert buns', () =>
      helpers.seedBunsTable(
          db,
          testBuns
      )
    )
    beforeEach('insert sauces', () =>
      helpers.seedSaucesTable(
          db,
          testSauces
      )
    )
    beforeEach('insert fillings', () =>
      helpers.seedFillingsTable(
          db,
          testFillings
      )
    )
    beforeEach('insert items', () =>
      helpers.seedItemsTable(
          db,
          testItems
      )
    )

    it(`gets all items`, function() {
      return supertest(app)
        .get(`/api/food/`)
        .expect(200)
        .expect(res => {
          expect(res.body).to.deep.equalInAnyOrder(testItems)
        })
  })

    it(`gets item by name`, function() {
      const testItem = testItems[0]
      return supertest(app)
        .get(`/api/food/items?item_name=${testItem.item_name}`)
        .expect(200)
        .expect(res => {
          expect(res.body).to.eql(testItem)
        })
  })
})
})
