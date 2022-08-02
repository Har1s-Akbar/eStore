import React from 'react'
import {useState} from 'react'
import {Menu, Typography, Drawer, Button} from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import { ShoppingCartOutlined} from '@ant-design/icons'
import Cart from './Cart'
import { useGlobalContext } from '../context/conetxt'
import Link from 'next/link'

function Nav() {
  const {totalQuantities} = useGlobalContext();

  const [visible, setVisible] = useState(false)
  const showDrawer = () =>{
    setVisible(true)
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Menu mode='horizontal' className='flex lg:justify-between sm:justify-center items-end content-center p-1'>
      <h1 className='sm:text-base lg:text-2xl font-medium sm:ml-3'>
      <Link href='/'>Spencer's Store</Link>
      </h1>
      <MenuItem className='lg:mr-20 sm:mr-0 sm:ml-20'>
      <div className='flex items-end mb-1'>
        <Button onClick={showDrawer}><ShoppingCartOutlined className='mb-4' style={{fontSize : '20px'}}/></Button>
      <Typography.Paragraph type='primary' className='m-1'>
        {totalQuantities}
      </Typography.Paragraph>
      </div>
      <Drawer title='Cart Items' placement='right' size='default'  onClose={onClose} visible={visible}>
        <Cart/>
      </Drawer>
      </MenuItem>
    </Menu>
  )
}

export default Nav