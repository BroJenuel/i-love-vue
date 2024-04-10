import {defineField, defineType} from 'sanity'

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
})
