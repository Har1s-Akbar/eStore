export default {
    name : 'footer',
    title: 'footer',
    type : 'document',
    fields :[
        {
            name : 'image',
            title :'Image',
            type :'array',
            of:[{type: 'image'}],
        },
        {
            name : 'smallText',
            title :'SmallText',
            type: 'string',
        },
        {
            name :'largeText',
            title:'LargeText',
            type:'string',
        },
        {
            name :'copy',
            title:'Copy',
            type:'string',
        }
    ]
}