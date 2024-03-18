export default {
  name: 'ball',
  title: 'Ball',
  type: 'document',
  fields: [
    {
      name: 'ballTitle',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'host',
      title: 'Host',
      type: 'string',
    },
    {
      name: 'approval',
      title: 'Is Ball Approved?',
      type: 'boolean',
    },
    {
      name: 'notifyOnApproval',
      title: 'Does the user wish to be notified upon ball Approval?',
      type: 'boolean',
    },
    {
      name: 'notifyName',
      title: 'Name of User to Notify.',
      type: 'string',
      hidden: ({document}) => document?.notifyOnApproval !== true
    },
    {
      name: 'notifyEmail',
      title: 'Email of User to Notify.',
      type: 'string',
      hidden: ({document}) => document?.notifyOnApproval !== true
    },
    {
      name: 'featured',
      title: 'Is Ball Featured?',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'ballTitle',
        maxLength: 96,
      },
    },
    {
      name: 'flyer',
      title: 'Flyer',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Category',
      type: 'array',
      of: [{ type: 'category' }],
    },
    {
      title: 'Ball Type',
      name: 'ballType',
      type: 'string',
      options: {
        list: [
          { title: 'Ball', value: 'BALL' },
          { title: 'Mini-Ball Deluxe', value: 'MINI_BALL_DELUXE' },
          { title: 'Mini-Ball', value: 'MINI_BALL' },
          { title: 'Kiki-Ball', value: 'KIKI_BALL' },
        ],
      },
    },
    {
      title: 'Created By',
      name: 'createdBy',
      type: 'reference',
      to: { type: 'user' },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'functionStartDate',
      title: 'Start',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'functionEndDate',
      title: 'End',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'Region',
      name: 'region',
      type: 'string',
      options: {
        list: [
          { title: 'East Coast, USA', value: 'EAST_COAST' },
          { title: 'West Coast, USA', value: 'WEST_COAST' },
          { title: 'The South', value: 'THE_SOUTH' },
          { title: 'The Midwest', value: 'THE_MIDWEST' },
          { title: 'Canada', value: 'CANADA' },
          { title: 'Abroad', value: 'ABROAD' },
        ],
      },
    },
    {
      title: 'Source',
      name: 'source',
      type: 'string',
      options: {
        list: [
          { title: 'Ball Host', value: 'PROMOTER' },
          { title: 'Spectator', value: 'SPECTATOR' },
        ],
      },
    },
    {
      title: 'Location',
      name: 'location',
      type: 'location',
    },
    {
      title: 'SSO User ID',
      name: 'uid',
      type: 'string',
    },
    {
      title: 'Website',
      name: 'website',
      type: 'string',
    },
    {
      title: 'Eventbrite Event Id',
      name: 'eventbriteId',
      type: 'string',
    },
    {
      name: 'eventbriteUrl',
      title: 'Eventbrite Event URL',
      type: 'url'
    },
    {
      title: 'Create Eventbrite Event',
      name: 'isCreateEventbrite',
      description: 'The ball must be approved AND the eventbrite id field must be blank for the event to be created in Eventbrite. If there is an eventId present or the ball is not approved this switch does nothing.',
      type: 'boolean'
    }
  ],
};
