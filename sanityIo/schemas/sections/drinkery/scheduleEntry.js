export default {
    name: 'scheduleEntry',
    title: 'Schedule Entry',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'dayName',
            title: 'Day Name',
            type: 'string',
        },
        {
            name: 'isClosed',
            title: 'Is it closed',
            type: 'boolean',
        },
        {
            name: 'startTime',
            title: 'Start Time',
            type: 'string',
        },
        {
            name: 'endTime',
            title: 'End Time',
            type: 'string',
        },
    ]
}
