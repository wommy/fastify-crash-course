const {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
} = require('../controllers/')

const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
}

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: getItems,
}

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
}

const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: { name: { type: 'string' } },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
}

const deleteItemOpts = {
  schema: {
    response: {
      200: { type: 'object', properties: { message: { type: 'string' } } },
    },
  },
  handler: deleteItem,
}

const updateItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: updateItem,
}

module.exports = function (fastify, _options, done) {
  fastify
    .get('/items/', getItemsOpts)
    .get('/items/:id', getItemOpts)
    .post('/items/', postItemOpts)
    .delete('/items/:id', deleteItemOpts)
    .put('/items/:id', updateItemOpts)
  done()
}
