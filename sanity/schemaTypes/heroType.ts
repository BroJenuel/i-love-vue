import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero Section',
  fields: [
    defineField({
      name: 'heading',
      type: 'text',
    }),
    defineField({
      name: 'paragraph',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
    }),
  ],
})
