export default {
  name: 'checkinPage',
  title: 'Check-in Page',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'shortUrl',
      title: 'Short URL',
      type: 'string',
    },
    {
      name: 'ball',
      title: 'Ball',
      type: 'reference',
      to: [{ type: 'ball' }],
    },
    {
      name: 'qrCode',
      title: 'QR Code',
      type: 'image',
    },
    {
      name: 'checkinList',
      title: 'Checkin List',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'checkin' }] }],
    },
  ],
};
