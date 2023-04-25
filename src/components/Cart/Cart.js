import React, { createContext ,useReducer } from 'react'
import cartReducer from './cartReducer';
export const Cartcontext = createContext();

function Cart(props) {

    const [cart , dispatch] = useReducer(cartReducer,);

  return (
    <Cartcontext.Provider value={{...cart,dispatch}}>
      {props.children}
    </Cartcontext.Provider>
  )
}

export default Cart
