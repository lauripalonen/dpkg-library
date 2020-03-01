const supertest = require('supertest')
const app = require('../app')
const baseUrl = '/api/packages'

const api = supertest(app)

test('packages are returned as json', async () => {
  await api
    .get(baseUrl)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('first item has correct properties', async () => {
  const response = await api.get(baseUrl)
  const samplePackage = response.body[0]

  expect(samplePackage).toHaveProperty('name')
  expect(samplePackage).toHaveProperty('description')
  expect(samplePackage).toHaveProperty('depencies')
  expect(samplePackage).toHaveProperty('alternatives')
  expect(samplePackage).toHaveProperty('dependants')
})