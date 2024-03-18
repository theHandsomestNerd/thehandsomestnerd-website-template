export default {
    name: 'SimpleStringListSection',
    title: 'Simple String List Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'textListItems',
            title: 'Text List Items',
            type: "array",
            of: [{type: "string"}],
        },
    ]
}
