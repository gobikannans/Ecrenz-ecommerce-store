import { Link } from "react-router-dom"
import { AiFillCheckCircle } from "react-icons/ai"

import Header from "../Header"

import "./index.css"

const Payments=()=>{
    return(
    <>
    <Header />

    <div className="no-order-container">
      <AiFillCheckCircle className="check-icon" />
      <h1 className="payment-heading">Payment Successful</h1>
      <p className="no-order-para">
        Thank you for ordering <br />
        Your payment is successfully completed.
      </p>
      <Link to="/" className="cart-links">
        <button type="button" className="pay-btn" >
          Go To Home Page
        </button>
      </Link>
    </div>
   </> 
    )
}

export default Payments