import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

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
      type: 'text',
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: 'Hero Section',
        subtitle: 'Hero',
      }
    },
  },
})
