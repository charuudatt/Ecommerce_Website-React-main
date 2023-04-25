import React,{createContext, useReducer} from 'react'
import CartReducer from './CartReducer';

export const CartContext = createContext();
function CartContextProvider(props) {
    const [Cart , dispatch] = useReducer(CartReducer,{ShoppingCart : [] , totalPrice : 0, Quantity : 0})
  
  return (
    <CartContext.Provider value={ {...Cart , dispatch }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
