import React from 'react'
import {Result, Button} from 'antd'
import Link from 'next/link'

function success() {
  return (
    <section className='mt-44'>
        <Result
    status="success"
    title="Successfully Purchased the Product"
    subTitle="Product will be delivered in 2-3 days. Happy Shopping"
    extra={[
      <Link key='1' href='/'>
        <Button type="secondary">
        Back To Home
      </Button>
      </Link>
    ]}
  />
    </section>
  )
}

export default success