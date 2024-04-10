import {defineArrayMember, defineField, defineType} from 'sanity'

const bulletPointsTypeFields = [
  defineField({
    name: 'title',
    type: 'string',
    title: 'Title',
  }),
  defineField({
    name: 'isActive',
    type: 'boolean',
    title: 'Is Active',
    initialValue: false,
  }),
  defineField({
    name: 'bold',
    type: 'boolean',
    title: 'Bold',
    initialValue: false,
  }),
]

const bulletPoints = [
  defineField({
    name: 'bulletPoints',
    type: 'array',
    title: 'Bullet Points',
    of: [
      defineArrayMember({
        name: 'bulletPoint',
        type: 'object',
        title: 'Bullet Point',
        fields: bulletPointsTypeFields,
      }),
    ],
  }),
]

export default defineType({
  name: 'plans',
  type: 'object',
  title: 'Plans',
  fields: [
    defineField({
      name: 'planBulletPoint',
      type: 'array',
      title: 'Plan Bullet Points',
      of: [
        defineArrayMember({
          name: 'basic',
          type: 'object',
          title: 'Basic',
          fields: bulletPoints,
        }),
        defineArrayMember({
          name: 'professional',
          type: 'object',
          title: 'Professional',
          fields: bulletPoints,
        }),
        defineArrayMember({
          name: 'basicPlus',
          type: 'object',
          title: 'Basic Plus',
          fields: bulletPoints,
        }),
      ],
    }),
  ],
})
