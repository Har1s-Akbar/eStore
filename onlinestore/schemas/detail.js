export default{
    name: 'detail',
    title: 'Detail',
    type : 'document',
    fields:[
        {
            name: 'title',
            title : 'Title',
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
            name: 'images',
            title: 'image',
            type : 'array',
            of:[
                {
                    type : 'image',
                    options : {
                        hotspot : true
                    },
                },
            ],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string'
        },
    ]
}