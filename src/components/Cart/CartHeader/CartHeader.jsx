import React from 'react'
import RemoveAllBtn from './components/RemoveAllBtn'

export default function CartHeader() {

  return (
    <div className="cart-header d-flex justify-content-between align-items-center mb-4" >
      <h5 className="fw-bolder">Shopping Cart</h5>
      <RemoveAllBtn />
    </div>
  )
}
