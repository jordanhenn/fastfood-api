const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Creations Endpoints', function() {
  let db

  const {
    testBuns,
    testSauces,
    testFillings,
    testItems,
    testCreations
  } = helpers.makeFastFoodFixtures()

  const expectedCreations = [
    {
        id: 1,
        creation_name: 'The Robby Bobby',
        date_created: "2029-01-22T16:28:32.615Z",
        user_name: 'Robby Bobby',
        bun_id: 2,
        fillingone_id: 1,
        fillingtwo_id: 1,
        rating: null,
        number_of_ratings: 0,
        sauce_id: 1,
        price: "11.98"
      },
      {
        id: 2,
        creation_name: 'The Jerry Terry',
        date_created: "2029-01-22T16:28:32.615Z",
        user_name: 'Jerry Terry',
        bun_id: 2,
        fillingone_id: 2,
        fillingtwo_id: 2,
        rating: null,
        number_of_ratings: 0,
        sauce_id: 1,
        price: "15.27"
      },
      {
        id: 3,
        creation_name: 'The Ronnie Donnie',
        date_created: "2029-01-22T16:28:32.615Z",
        user_name: 'Ronnie Donnie',
        bun_id: 2,
        fillingone_id: 3,
        fillingtwo_id: 3,
        rating: null,
        number_of_ratings: 0,
        sauce_id: 1,
        price: "3.38"
      }
  ];

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

  describe(`POST /api/creations`, () => {
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

    it(`posts a creation, responding with 201 and the creation`, function() {
      const testCreation = testCreations[0]
      return supertest(app)
        .post('/api/creations')
        .send({ 
            creation_name: testCreation.creation_name,
            user_name: testCreation.user_name,
            bun_id: testCreation.bun_id,
            fillingone_id: testCreation.fillingone_id,
            fillingtwo_id: testCreation.fillingtwo_id,
            rating: null,
            number_of_ratings: 0,
            sauce_id: testCreation.sauce_id,
            price: testCreation.price
         })
        .expect(201)
        .expect(res => {
          expect(res.body).to.have.property('id')
          expect(res.body.creation_name).to.equal(testCreation.creation_name)
          expect(res.body.user_name).to.equal(testCreation.user_name)
          expect(res.body.bun_id).to.equal(testCreation.bun_id)
          expect(res.body.fillingone_id).to.equal(testCreation.fillingone_id)
          expect(res.body.fillingtwo_id).to.equal(testCreation.fillingtwo_id)
          expect(res.body.sauce_id).to.equal(testCreation.sauce_id)
          expect(res.body.price).to.equal(testCreation.price)
          expect(res.headers.location).to.eql(`/api/creations/${res.body.id}`)
          const expectedDate = new Date().toLocaleString()
          const actualDate = new Date(res.body.date_created).toLocaleString()
          expect(actualDate).to.eql(expectedDate)
        })
    })
  })

  describe(`GET /api/creations`, () => {
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
  beforeEach('insert creations', () =>
    helpers.seedCreationsTable(
        db,
        expectedCreations
    )
  )

    it(`gets an array of current creations, responding with 200 and the result`, function() {
      return supertest(app)
        .get('/api/creations')
        .expect(200)
        .expect(res => {
          expect(res.body).to.deep.equalInAnyOrder(expectedCreations)
        })
    })
  })

  describe(`GET /api/creations/:creation_id`, () => {
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
  beforeEach('insert creations', () =>
    helpers.seedCreationsTable(
        db,
        testCreations
    )
  )

    it(`gets creations by id, responding with 200 and the result`, function() {
      const testCreation = testCreations[0]
      return supertest(app)
        .get(`/api/creations/${testCreation.id}`)
        .expect(200)
        .expect(res => {
            expect(res.body).to.have.property('id')
            expect(res.body.creation_name).to.equal(testCreation.creation_name)
            expect(res.body.user_name).to.equal(testCreation.user_name)
            expect(res.body.bun_id).to.equal(testCreation.bun_id)
            expect(res.body.fillingone_id).to.equal(testCreation.fillingone_id)
            expect(res.body.fillingtwo_id).to.equal(testCreation.fillingtwo_id)
            expect(res.body.sauce_id).to.equal(testCreation.sauce_id)
            expect(res.body.price).to.equal(testCreation.price)
            const expectedDate = new Date().toLocaleString()
            const actualDate = new Date(res.body.date_created).toLocaleString()
            expect(actualDate).to.eql(expectedDate)
          })
    })
  })

  describe(`PUT /api/creations/:creation_id`, () => {
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
  beforeEach('insert creations', () =>
    helpers.seedCreationsTable(
        db,
        testCreations
    )
  )

    it(`updated creation rating, responding with 204`, function() {
      const testCreation = testCreations[0];
      return supertest(app)
        .put(`/api/creations/${testCreation.id}`)
        .send({ 
            newRating: 3,
            newNumberOfRatings: 1
         })
        .expect(204)
    })
  })
})