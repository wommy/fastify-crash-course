const { v4: uuidv4 } = require('uuid')
let Items = require('../database/')

const getItems = (_req, reply) => {
  reply.send(Items)
}

const getItem = ({ params: { id } }, reply) => {
  reply.send(Items.find(item => item.id === id))
}

const addItem = ({ body: { name } }, reply) => {
  const item = {
    id: uuidv4(),
    name,
  }
  Items = [...Items, item]
  reply.code(201).send(item)
}

const deleteItem = ({ params: { id } }, reply) => {
  Items = Items.filter(item => item.id !== id)
  reply.send({ message: `item ${id} deleted!` })
}

const updateItem = ({ params: { id }, body: { name } }, reply) => {
  Items = Items.map(item => (item.id === id ? { id, name } : item))
  reply.send(Items.find(item => item.id === id))
}

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
}
