export default {
  name: 'checkin',
  title: 'Check In',
  type: 'document',
  fields: [
    {
      name: 'firstname',
      title: 'Submitted by First Name',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Submitted by Last Name',
      type: 'string',
    },
    {
      name: 'business',
      title: 'Business Name',
      type: 'string'
    },
    {
      name: 'businessUrl',
      title: 'Business URL',
      type: 'url'
    },
    {
      name: 'user',
      title: 'Anybody Walking User?',
      type: 'reference',
      to: [{ type: 'user' }]
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'house',
      title: 'House',
      type: 'reference',
      to: [{ type: 'house' }]
    },
    {
      name: 'houseSubmission',
      title: 'House',
      type: 'house'
    }
  ],
};

