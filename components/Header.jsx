import React from 'react'
import {Carousel, Typography} from 'antd'
import { urlFor } from '../lib/client'

function Header({data}) {
  return (
    <Carousel autoplay autoplaySpeed={2000}>
        <div>
            <img className='relative' src={urlFor(data[0].image[0])} alt={data.title} />
            <div className='lg:invisible ml-10 absolute top-0 sm:visible'>
                <h1 className='text-xl text-amber-100 mt-3'>
                    Get The Best Deals
                    <br /> Here
                </h1>
            </div>
            <div className='absolute sm:invisible lg:visible lg:top-10 ml-20'>
                <Typography.Title level={5} type='secondary'>
                    {data[0].title}
                </Typography.Title>
                <Typography.Title level={4}>
                    {data[0].small}
                </Typography.Title>
                <h1  className='list-disc text-gray-50 text-5xl my-4' level={1}>
                    {data[0].Large}
                </h1>
                <Typography.Title className='my-8' level={3}>
                    {data[0].medium}
                </Typography.Title>
            </div>
        </div>
        <div>
            <img className='lg:h-96 lg: w-full sm:h-42' src={urlFor(data[0].image[1])} alt={data[0].title} />
        </div>
    </Carousel>
  )
}

export default Header