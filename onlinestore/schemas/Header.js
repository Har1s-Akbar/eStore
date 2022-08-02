export default {
    name : 'header',
    title: 'Header',
    type: 'document',
    fields:[
        {
            name: 'image',
            title:'Image',
            type:'array',
            of :[
                {
                    type: 'image',
                }
            ]
        },
        {
            name: 'title',
            title:'Title',
            type:'string',
        },
        {
            name: 'small',
            title:'Small',
            type:'string',
        },
        {
            name : 'medium',
            title: 'Medium',
            type : 'string',
        },
        {
            name: 'large',
            name : 'Large',
            type:'string'
        },
    ]
}