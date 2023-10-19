import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'

export default defineConfig({
    title: "Chow Works Website",
    projectId: "rhjxlvuj",
    dataset: "development",
    plugins: [deskTool()],
    schema: {
        types: schemas,
    },
});