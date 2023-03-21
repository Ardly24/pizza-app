import {React, useState} from 'react'
import '../Styles/CheckOut.css'

import { Link } from "react-router-dom"
import {IoMdArrowRoundBack} from 'react-icons/io'

const CheckOut = ({cartItems}) => {

  const [formData, setFormData]= useState({
       name: "",
       phone: "",
       address:"",
       delivery: "",
       paymentType: ""
  })



  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

  return (
    <div className="forms">

      <form className='isdelivery'>
      <h3>How would you like to get your order?</h3>
        <div>
        <input type="radio" id="dine-in" name="delivery" value="dine-in" onChange={handleChange}/>
        <label htmlFor='dine-in'>Dine-in</label> 
        <br/> 
        <input type="radio" id="dine-in" name="delivery" value="taka-away" onChange={handleChange}/>
        <label htmlFor='take-away'>Take-away</label> 
        <br/>
        <input type="radio" id="delivery" name="delivery" value="delivery" onChange={handleChange}/>
        <label htmlFor='delivery'>Delivery</label>
         
        </div>
      </form>

      {formData.delivery === "delivery" &&(
      <form className='deliveryForm'>
      <h2> Get Your order delivered</h2>
        <label>Your Name:</label>
        <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder='Name'/>
        <label>Phone:</label>
        <input type="phone" name="phone" onChange={handleChange} value={formData.phone} placeholder='Phone'/>
        <label>Delivery Address:</label>
        <input type="text" name="address" onChange={handleChange} value={formData.address} placeholder='Address'/>
        <button className="btn">Submit</button> 
    </form> )}

    <form className='isdelivery'>
      <h3>Payment Options</h3>
        <div>
        <input type="radio" id="cash" name="paymentType" value="cash" onChange={handleChange}/>
        <label htmlFor='cah'>Cash</label>
        <br/>
        <input type="radio" id="card" name="paymentType" value="card" onChange={handleChange}/>
        <label htmlFor='card'>Card</label> 
        </div>
      </form>

      {formData.paymentType === "card" &&(
        <form className='paymentForm'>
        <h2>Payment Details</h2>
        <h3>Please Capture Your Card details below</h3>
        <label>Name on card:</label>
        <input type="text" name="user_name" placeholder='Mr D card'/>

        <label>Card number:</label>
        <input type="text" name="card-number" placeholder='366423456789214'/>
            

        <label>Expiry Month:</label>
        <select id="month">
                <option>MM</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
            </select>
   
            <label>Expiry Year:</label>
            <select id="year">
                <option>YYYY</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
            </select>

        <div>
        <input type='radio'
         name='payment'
         value='straight'
        />
        <label>Straight</label>

      
        <input type='radio'
         name='payment'
         value='budgect'
        />
        <label>Budget</label>
        </div>
       <label>Security code:</label>
        <input type="text" name="user_name" placeholder='CVC/CVV'/>
           <div>
            <button className="btn">Pay now</button>
            <Link to="/pizza-app"
             className="btn">Cancel</Link> 
            </div>
        </form>
         )}  
         
          {formData.paymentType === "cash" &&(
         <h3>Please pay at the till, thank you.</h3>)}
        <div>
          <Link to="/cart"
           className="btnBack"><IoMdArrowRoundBack size="1.5rem"/> Back</Link>  
        </div> 
</div>
  )
}

export default CheckOut