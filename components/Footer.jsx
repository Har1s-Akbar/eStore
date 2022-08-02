import React from 'react'
import {Typography} from 'antd'
import { urlFor } from '../lib/client'

function FooterBanner({data}) {
  const {copy, image,largeText,smallText} = data[0]
  return (
    <section className='w-8/12 m-auto mt-10 lg:grid items-center lg:grid-cols-2'>
      <div className='text-left m-auto text-center mt-10 '>
        <Typography.Paragraph type='secondary'>{smallText}</Typography.Paragraph>
        <h1 className='lg:invisible sm:visible'>{largeText}</h1>
        <Typography.Title className='lg:visible sm:invisible' level={1}>{largeText}</Typography.Title>
      </div>
      <img className='w-full m-auto' src={urlFor(image[0])} alt={smallText} />
      <Typography.Paragraph className='col-span-2 text-center'>{copy}</Typography.Paragraph>
    </section>
  )
}

export default FooterBanner