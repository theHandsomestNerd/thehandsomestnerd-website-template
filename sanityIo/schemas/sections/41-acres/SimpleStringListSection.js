import {ColorListing} from "../../mui/ColorListing";

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
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            options: {list: ColorListing}
        },
        {
            name: 'textListItems',
            title: 'Text List Items',
            type: "array",
            of: [{type: "string"}],
        },
    ]
}
