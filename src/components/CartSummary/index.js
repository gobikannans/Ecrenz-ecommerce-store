import { Link } from 'react-router-dom'

import CartContext from '../../context/CartContext'


import './index.css'

const CartSummary = (props) => (

  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      const {onClickRemoveAllBtn}=props
      


      

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <Link to={`/payments/${total}`} className="check-btn-links" onClick={onClickRemoveAllBtn}>
            <button type="button" className="checkout-button d-sm-none">
              Checkout
            </button>
            </Link>
          </div>
          <Link to={`/payments/${total}`} className="check-btn-links" onClick={onClickRemoveAllBtn}>
          <button type="button" className="checkout-button d-lg-none">
            Checkouts
          </button>
          </Link>


        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary