import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import {visionTool} from "@sanity/vision";

export default defineConfig({
    title: "Chow Works Website",
    projectId: "rhjxlvuj",
    dataset: "development",
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemas,
    },
});