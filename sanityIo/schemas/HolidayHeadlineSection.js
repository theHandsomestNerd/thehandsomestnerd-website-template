export default {
    name: 'HolidayHeadlineSection',
    title: "Holiday Headline Section",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
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
            name: 'contentText',
            title: 'Content Text',
            type: 'text',
        },
        {
            name: 'contentSubtext',
            title: 'Content Subtext',
            type: 'text',
        },
        {
            name: 'holidayDate',
            title: 'Holiday Date',
            type: 'date',
        },
        {
            name: 'holidayIconLeft',
            title: 'Holiday Icon Left',
            type: 'image',
        },
    {
            name: 'holidayIconRight',
            title: 'Holiday Icon Right',
            type: 'image',
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}



