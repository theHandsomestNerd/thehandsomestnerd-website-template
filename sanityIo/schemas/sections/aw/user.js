export default {
  name: 'user',
  title: 'User',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'profileImage',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'firebaseUUID',
      title: 'User Id',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'admin',
      title: 'Admin Privs?',
      type: 'boolean',
    },
    {
      name: 'favorites',
      title: 'Favorites',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'ball' }],
        },
      ],
    },
    {
      name: 'signInProvider',
      title: 'Sign In Provider',
      type: 'string',
    },
  ],
};
