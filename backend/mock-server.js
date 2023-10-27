const { setupServer } = require('msw/node')
const { rest } = require('msw')
const Todo = require('./helpers')

async function getAll(req, res, ctx) {
  return res(
    ctx.json(await Todo.getAll()),
  )
}
async function create(req, res, ctx) {
  return res(
    ctx.json(await Todo.create(req.body)),
  )
}
async function toggleDone(req, res, ctx) {
  return res(
    ctx.json(await Todo.toggleDone(req.params.id)),
  )
}
async function remove(req, res, ctx) {
  return res(
    ctx.json(await Todo.remove(req.params.id)),
  )
}
const handlers = [
  rest.get('http://localhost:9009/api/todos', getAll),
  rest.post('http://localhost:9009/api/todos', create),
  rest.patch('http://localhost:9009/api/todos/:id', toggleDone),
  rest.delete('http://localhost:9009/api/todos/:id', remove),
]

module.exports = setupServer(...handlers)
