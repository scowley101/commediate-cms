// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import deskStructure from './deskStructure.js'


export default defineConfig({
  title: "commediate-cms",
  projectId: "mnpavw3y",
  dataset: "production",
  plugins: [deskTool({
    structure: deskStructure
  })],
  schema: {
    types: schemas,
  },
});