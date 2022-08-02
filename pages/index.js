import {Menu} from 'antd'
import {Nav, Header, Products, Delivery, Footer} from '../components'
import { client } from '../lib/client'

export default function Home({productData, headerData, deliveryData, footerData}) {
  
  return (
    <>
    <Nav />
    <Header data={headerData}/>
    <Products data={productData}/>
    <Delivery data={deliveryData}/>
    <Footer data={footerData}/>
    </>
  )
};

export const getServerSideProps = async() =>{
  const productQuery = '*[_type == "product"]'
  const productData = await client.fetch(productQuery)

  const headerQuery = '*[_type == "header"]'
  const headerData = await client.fetch(headerQuery)

  const deliveryQuery = '*[_type == "delivery"]'
  const deliveryData = await client.fetch(deliveryQuery)
  
  const footerQuery = '*[_type == "footer"]'
  const footerData = await client.fetch(footerQuery)
  
  return{
    props:{productData, headerData, deliveryData, footerData}
  }
}