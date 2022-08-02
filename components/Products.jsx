import React from 'react'
import {useState} from 'react'
import {Card, Typography, Button} from "antd"
import { urlFor } from '../lib/client'
import Meta from 'antd/lib/card/Meta'
import Link from 'next/link'
import { useGlobalContext } from '../context/conetxt'

function Products({data}) {
    return (
    <section className='lg:grid lg:grid-cols-3 lg:my-20 sm:my-5 7/12 m-auto'>
        <Typography.Title className='col-span-3 text-center' level={1}>Products</Typography.Title>
        <Typography.Paragraph className='col-span-3 text-center' type='secondary'>Only our best Products</Typography.Paragraph>
        {data.map((item)=> 
        <Link href={`/${item?.slug.current}`}>
        <Card bordered hoverable className='lg:w-7/12 sm:w-9/12 m-auto h-7/12 sm:my-10 lg:my-5 ' cover={<img src={urlFor(item.images[0])} alt="" />}>
            <Meta title={item.title}/>
            <Typography.Paragraph type='secondary' className='mt-3'>$ {item.price}</Typography.Paragraph>
            <Typography.Paragraph className='my-3' type='secondary'>{item.body.en[0].children.map((para)=> para.text)}</Typography.Paragraph>
        </Card>
        </Link>
        )}
    </section>
  )
}

export default Products