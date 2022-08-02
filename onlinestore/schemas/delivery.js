export default {
    name: 'delivery',
    title: 'Delivery',
    type: 'document',
    fields: [
      {
        name:'image',
        title:'Image',
        type:'array',
        of:[
          {type : 'image'},
        ]
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
    ],
  }