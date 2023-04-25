import React,{useContext} from 'react';
import { CartContext } from '../Global/CartContext';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Cart(props) {
  const {ShoppingCart , totalPrice , Quantity , dispatch} = useContext(CartContext);

  const updateStripeHandler = async (token)=>{
  const ProductS = {name : "All Products" , Price :totalPrice}
   const responce =  await axios.post("http://localhost:1232/checkout",{
        ProductS,
        token
   })
  const {status} = responce.data;
    dispatch({ type: "Emty" });
    // toast.success(,{position:toast.POSITION.TOP_RIGHT})
    alert("Payment Successfull")
    props.history.push(`/`);
   
  
  }
  return (
    <div className="cartContainer">
      <div className="cartDetails">
        {ShoppingCart.length > 0 ? (
          ShoppingCart.map((cart) => (
            <div className="cart" key={cart.id}>
              <span className="cart-img">
                <img src={cart.Image} alt={cart.name} />
              </span>
              <span className="cart-product-name">{cart.Name}</span>
              <span className="cart-product-price">${cart.Price}</span>
              <span
                className="inc"
                onClick={() => {
                  dispatch({ type: "Inc", id: cart.id, cart });
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </span>
              <span className="prod-quantity">{cart.Quantity}</span>
              <span
                className="dec"
                onClick={() => {
                  dispatch({ type: "Dec", id: cart.id, cart });
                }}
              >
                <i className="fa-solid fa-minus"></i>
              </span>
              <span className="total-Price">${cart.Price * cart.Quantity}</span>
              <span
                className="delete"
                onClick={() => {
                  dispatch({ type: "Delete", id: cart.id, cart });
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </span>
            </div>
          ))
        ) : (
          <div>
          <h2> To Make Amends ...!</h2>
          <Link to="/"><div className='go-to-cart'>Go to shopping</div></Link>
          </div>
        )}
      </div>
      <div>
        {ShoppingCart.length > 0 ? (
          <div className="Cart-Summary">
            <div></div>
            <div className="summary">
              <h3>Cart Summary</h3>

              <div className="total-items">
                <div className="items"> Total Items</div>
                <div className="item-count">{Quantity}</div>
              </div>

              <div className="total-price-section">
                <div className="just-title">Total Price</div>
                <div className="item-price">${totalPrice}</div>
              </div>

              <div className="stripe-section">
              <StripeCheckout
                  stripeKey="pk_test_51MhAnkSGQboMBc9YR7g9olg8HBL0IIsrcPbVsQSbzlhW1sIbtlqqid3raRmIfioa9RO2jFOgkr8TQbQ1FkQBzGxj00eSNLFQCH"
                  token={updateStripeHandler}
                  billingAddress
                  shippingAddress
                  amount={totalPrice * 100}
                  name="All Products"
                  />
              </div>
            </div>
          </div>
        ) : (
          <Link to = "/"><div className='track-order'>Track your Order</div></Link>
        )}
      </div>
    </div>
  );
}

export default Cart
/*   { ShoppingCart.length > 0 ?
      <div className='cart-summary'>
        <div className='summary'>
          <h3>Cart Summary</h3>
          <div className='total-items'> 
          <div className='items'>Total Items</div>
            <div className='items-count'></div>
            {Quantity}
            
         
        </div>
      </div> 
    </div> :
    <div>Hello</div>
    } */