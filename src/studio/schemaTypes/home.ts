export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'text',
          rows: 2
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string'
        },
        {
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string'
        },
        {
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true }
        }
      ]
    },
    {
      name: 'features',
      title: 'Features Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'items',
          title: 'Feature Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Feature Title',
                  type: 'string'
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}