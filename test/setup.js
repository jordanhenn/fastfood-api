process.env.TZ = 'UCT'
process.env.NODE_ENV = 'test'

require('dotenv').config()

process.env.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL
  || "postgresql://dunder_mifflin@localhost/fastfood-test"

const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const chai = require('chai')

chai.use(deepEqualInAnyOrder)
const { expect } = chai
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest