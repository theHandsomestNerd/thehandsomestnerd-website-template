import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import {visionTool} from "@sanity/vision";

export default defineConfig({
    title: "The Handsomest Nerd",
    projectId: "e5l5k4i5",
    dataset: "development",
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemas,
    },
});