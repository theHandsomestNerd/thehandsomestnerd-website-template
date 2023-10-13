export default {
    name: 'scheduleGroup',
    title: 'Schedule Group',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'hoursOfOperation',
            title: 'Hours of Operation',
            type: "array",
            of: [{type: "scheduleEntry"}]
        },
    ]
}
