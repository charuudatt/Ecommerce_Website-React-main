import React ,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'
function Navbar() {
  const {Quantity} = useContext(CartContext)
  return (
    <nav>
      <ul className='left'>
        <li><Link to='/'><i class="fa-solid fa-bag-shopping"></i><span> </span> AP's ShopHouse</Link></li>
      </ul>
      <ul className='right'>
      <input className='search'/>
        <li><Link to='/cart'>
                <span className='shoppingCart'><i class="fa-solid fa-cart-shopping"></i></span>
                <span className='shoppingCartTotal'>{Quantity}</span>
        </Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
