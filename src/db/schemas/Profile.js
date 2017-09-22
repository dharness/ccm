const profileSchema = {
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
          type: 'integer',
          type: 'string'
      }
  },
  required: ['phoneNumber'],
};