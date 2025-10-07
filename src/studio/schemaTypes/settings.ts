export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'navigation', title: 'Navigation' },
    { name: 'social', title: 'Social Media' }
  ],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'general',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      group: 'general'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general'
    },
    {
      name: 'mainNav',
      title: 'Main Navigation',
      type: 'array',
      group: 'navigation',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Link Title',
              type: 'string'
            },
            {
              name: 'slug',
              title: 'Link URL',
              type: 'string',
              description: 'Example: /about, /services, /contact'
            }
          ]
        }
      ]
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      group: 'social',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'twitter', type: 'url', title: 'Twitter' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' }
      ]
    }
  ]
}