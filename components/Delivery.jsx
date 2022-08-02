import React from 'react'
import {useState} from 'react'
import {Typography, Image, Button, Modal, Card, Statistic} from 'antd'
import { urlFor } from '../lib/client'


function Delivery({data}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {description, image, slug, title} = data[0];
  const showModal = ()=>{
    setIsModalVisible(true)
  };
  const handleOk = ()=>{
    setIsModalVisible(false)
  }
  const handleCancel = ()=>{
    setIsModalVisible(false)
  }
  
  return (
    <section className='mt-10'>
      <Typography.Title className='text-center' level={2}>{title}</Typography.Title>
      <Typography.Paragraph className='text-center '>You Choose we Deliver</Typography.Paragraph>
      <div className='lg:grid lg:grid-cols-2 w-8/12 m-auto mt-10'>
        <img className='rounded-xl sm:w-96' src={urlFor(image[0])} alt={title}/>
        <Typography.Paragraph className='mt-20 text-xl text-left w-11/12 m-auto h-full' type='secondary'>{description}</Typography.Paragraph>
      <Button onClick={showModal} type='default' className='col-start-2 lg:w-1/3 sm:w-full m-auto'>See Plans</Button>
      <Modal title='Delivery Plans' visible={isModalVisible} closeIcon onOk={handleOk} onCancel={handleCancel}>
        <Statistic title='With-In City' value='7$'/>
        <Statistic title='Outside the City' value='15$'/>
      </Modal>
      </div>
    </section>
  )
}

export default Delivery