import {defineArrayMember, defineField, defineType} from 'sanity'
import {TagsIcon} from '@sanity/icons'

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
        preview: {
          select: {
            title: 'title',
            disabled: 'isActive',
            bold: 'bold',
          },
          prepare({title, disabled, bold}) {
            return {
              title,
              subtitle: `${!disabled ? 'disabled' : 'enabled'} - ${bold ? 'bold' : 'normal'}`,
            }
          },
        },
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
      type: 'object',
      title: 'Plan Bullet Points',
      fields: [
        defineField({
          name: 'basic',
          type: 'object',
          title: 'Basic',
          fields: bulletPoints,
        }),
        defineField({
          name: 'professional',
          type: 'object',
          title: 'Professional',
          fields: bulletPoints,
        }),
        defineField({
          name: 'basicPlus',
          type: 'object',
          title: 'Basic Plus',
          fields: bulletPoints,
        }),
      ],
    }),
  ],
  icon: TagsIcon,
  preview: {
    prepare() {
      return {
        title: 'Pricing Plans',
        subtitle: 'plans',
      }
    },
  },
})
