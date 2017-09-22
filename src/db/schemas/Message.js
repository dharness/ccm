const messageSchema = {
  version: 0,
  type: 'object',
  properties: {
      toId: {
          type: 'string'
      },
      fromId: {
          type: 'string'
      },
      type: {
          type: 'string'
      },
  },
  required: [ 'toId', 'fromId', 'type' ],
};

export default messageSchema