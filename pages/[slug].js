import React from 'react'
import {useState} from 'react'
import {Carousel,Card, Typography, Button, Collapse, Avatar, Comment} from 'antd'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import {client, urlFor} from '../lib/client'
import {Nav} from '../components'
import { useGlobalContext } from '../context/conetxt'

const {Panel} = Collapse
const tablist = [
  {
    key : 'product',
    tab : 'Product',
  },
  {
    key : 'reviews',
    tab : 'Reviews',
  },
]

function Detail(detail) {
  const { qty, onAdd} = useGlobalContext();
    const [activeTabKey1, setActiveTabKey1] = useState('product');
  const {price,_id ,images, description, title,  } = detail?.detail;
  const {caption,name} = detail?.reviewData;
  const onChange = (key) =>{
    setActiveTabKey1(key)
  };
  const content = {
    product : <section className='lg:grid lg:grid-cols-2'>
      <Carousel autoplay autoplaySpeed={2000} className='lg:w-1/2 sm:w-3/4 m-auto'>
        <div className='w-full '>
          <img className=' rounded-xl' src={urlFor(images[0])} alt={title} />
        </div>
        <div className='w-full'>
          <img className='rounded-xl' src={urlFor(images[1])} alt={title} />
        </div>
        <div className='w-full'>
          <img className='rounded-xl' src={urlFor(images[2])} alt={title} />
        </div>
      </Carousel>
      <div className='lg:m-0 sm:mt-5'>
        <h1 className='sm:text-xl lg:text-2xl lg:font-medium'>{title}</h1>
        <Typography.Paragraph type='secondary' className='my-20'>Price-$ {price}</Typography.Paragraph>
        <Typography.Paragraph type='secondary' className='mt-5'>{description}</Typography.Paragraph>
        <div className='mt-5'>
        <br/>
        <Button className='mt-3' type='secondary' onClick={() => onAdd(detail.detail, qty)}>Add To Cart</Button>
        </div>
      </div>
    </section>,
    reviews: <section className='grid sm:w-full lg:w-1/2 m-auto'>
      <Collapse accordion bordered={false} defaultActiveKey={[1]} className="site-collapse-custom-collapse">
        <Panel header={name[0]} key='1' className="site-collapse-custom-panel">
          <Avatar>{name[0]}</Avatar>
          <Typography.Paragraph className='my-5'>{caption[0]}</Typography.Paragraph>
        </Panel>
        <Panel header={name[1]} key='2' className="site-collapse-custom-panel">
        <Avatar>{name[1]}</Avatar>
          <Typography.Paragraph className='my-5'>{caption[1]}</Typography.Paragraph>
        </Panel>
      </Collapse>
    </section>
  }
  return (
    <>
    <Nav/>
    <Card style={{width: '80%',margin: 'auto', marginTop: '5%'}}
    tabList={tablist}
    activeTabKey={activeTabKey1}
    onTabChange={(key)=> onChange(key)}
    >
      {content[activeTabKey1]}
    </Card>
    </>
  )
};

export const getStaticPaths = async()=>{
  const query = `*[_type == "product"]{
    slug{
      current
    }
  }`
  const product = await client.fetch(query);
  const paths = product?.map((item)=> ({
    params : {slug: item.slug.current}
  })) 
  return{
    paths,
    fallback : 'blocking'
  }
}

export const getStaticProps= async({params : {slug}}) =>{
  
  const reviewQuery = `*[_type == "review" && slug.current == '${slug}'][0]`
  const reviewData = await client.fetch(reviewQuery)

  const query = `*[_type == "detail" && slug.current == '${slug}'][0]`
  const detail = await client.fetch(query)

  return{
    props: {detail, reviewData}
  }
}

export default Detail