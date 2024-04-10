import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'lessonSummary',
  type: 'object',
  title: 'Lesson Summary',
  fields: [
    defineField({
      name: 'lessons',
      type: 'number',
    }),
    defineField({
      name: 'courses',
      type: 'number',
    }),
    defineField({
      name: 'hours',
      type: 'number',
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    prepare() {
      return {
        title: 'Lesson Summary',
        subtitle: 'summary',
      }
    },
  },
})
