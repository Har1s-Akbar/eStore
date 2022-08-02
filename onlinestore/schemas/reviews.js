export default {
    name: 'review',
    title : 'Review',
    type: 'document',
    fields:[
        {
            name: 'title',
            title: 'Title',
            type: 'string'
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
            name: 'name',
            title: 'Name',
            type: 'array',
            of:[
                {type: 'string'},
            ],
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'array',
            of:[
                {type: 'image'},
            ],
            options:{
                hotspot : true
            },
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'array',
            of:[
                {type: 'string'}
            ],
            options:{
                isHighlighted: true 
            },
        }
    ]
}