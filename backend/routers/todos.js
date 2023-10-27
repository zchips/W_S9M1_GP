const express = require('express')
const Todo = require('../helpers')

const router = express.Router()

router.get('/', async (req, res) => {
  res.json(await Todo.getAll())
})

router.post('/', async (req, res) => {
  res.json(await Todo.create(req.body))
})

router.patch('/:id', async (req, res) => {
  res.json(await Todo.toggleDone(req.params.id))
})

router.delete('/:id', async (req, res) => {
  res.json(await Todo.remove(req.params.id))
})

module.exports = router
