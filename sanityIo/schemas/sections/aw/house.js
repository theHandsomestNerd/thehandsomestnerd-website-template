export default {
  name: 'house',
  title: 'House',
  type: 'document',
  fields: [
    {
      name: 'isVerified',
      title: 'Verified',
      type: 'boolean'
    },
    {
      name: 'houseName',
      title: 'House Name',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'location',
    },
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
      name: 'submittedByFirebaseUUID',
      title: 'Submitted By',
      type: 'reference',
      to: [{type: 'user'}]
    },
    {
      name: 'submittedByEmail',
      title: 'Submitted By Email',
      type: 'string'
    }
  ],
};
