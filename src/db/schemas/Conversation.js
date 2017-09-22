import messageSchema from './Message'

const conversationSchema = {
  version: 0,
  type: 'object',
  properties: {
      firstName: {
          type: 'string'
      },
      lastName: {
          type: 'string'
      },
      phoneNumber: {
          type: 'string'
      },
      messages: [ messageSchema ]
  },
  required: [ 'phoneNumber' ],
};