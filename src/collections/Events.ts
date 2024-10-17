import type { CollectionConfig } from 'payload'

const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'categoryName',
  },
  fields: [
    {
      name: 'categoryName',
      type: 'text',
      required: true,
      label: 'Category Name',
      admin: {
        description: 'Enter category name (e.g., Birthday Party, Baby Shower)',
      },
    },
    {
      name: 'events',
      type: 'array',
      label: 'Events',
      admin: {
        description: 'Add multiple events for this category',
      },
      fields: [
        {
          name: 'eventName',
          type: 'text',
          required: true,
          label: 'Event Name',
          admin: {
            description: "Enter event name (e.g., Mike's Birthday, Katy's Birthday)",
          },
        },
        {
          name: 'eventImages',
          type: 'array',
          label: 'Event Images',
          admin: {
            description: 'Upload multiple images for this event',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default Events
