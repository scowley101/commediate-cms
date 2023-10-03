// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'


export default defineConfig({
  title: "commediate-cms",
  projectId: "mnpavw3y",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});