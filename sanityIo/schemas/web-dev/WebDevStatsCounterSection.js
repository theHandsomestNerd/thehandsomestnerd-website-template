
export default {
  name: 'WebDevStatsCounterSection',
  title: "Web Dev Stats Counter",
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'reference',
      to:[{type: 'MuiTheme'}]
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of:[{type: 'WebDevStatistic'}]
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}



