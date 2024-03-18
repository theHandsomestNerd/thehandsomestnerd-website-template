export default {
  name: 'ballComment',
  title: 'Ball Comments',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User ID',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'ball',
      title: 'Ball',
      type: 'reference',
      to: [{ type: 'ball' }],
    },
    {
      name: 'comment',
      title: 'Comment Text',
      type: 'string',
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
    },
  ],
};
