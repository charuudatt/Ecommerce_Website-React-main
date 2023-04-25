import React from 'react'

function CartReducer(state , action) {
    const {ShoppingCart , totalPrice , Quantity}= state
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    
  switch(action.type){
       case "Add":
       const Check = ShoppingCart.find(product => product.id === action.id);
       if(Check){
        return state
       }else{
        product = action.product;
        product["Quantity"] = 1
        updatedQty = Quantity + 1;
        updatedPrice = totalPrice + product.Price
        return {ShoppingCart : [product ,...ShoppingCart] , totalPrice : updatedPrice , Quantity :updatedQty }
       }
      case "Inc" : 
       product = action.cart ;
       product.Quantity = product.Quantity+1;
       updatedPrice = totalPrice +product.Price;
       updatedQty = Quantity + 1;
       index = ShoppingCart.findIndex(cart => cart.id === action.id);
       ShoppingCart[index] = product
       return {ShoppingCart : [...ShoppingCart] , totalPrice : updatedPrice , Quantity :updatedQty }
    
       case "Dec" : 
       product = action.cart ;
      if(product.Quantity >1){
        product.Quantity = product.Quantity-1 ; 
        updatedPrice = totalPrice - product.Price;
        updatedQty = Quantity - 1;
        index = ShoppingCart.findIndex(cart => cart.id === action.id);
        ShoppingCart[index] = product
        return {ShoppingCart : [...ShoppingCart] , totalPrice : updatedPrice , Quantity :updatedQty }
      }else{
        return state
      }
      
      case "Delete":
        const productToDelete = ShoppingCart.find(product => product.id === action.id);
        if (!productToDelete) {
          return state;
        }
        const newShoppingCart = ShoppingCart.filter(product => product.id !== action.id);
        const newTotalPrice = totalPrice - (productToDelete.Price * productToDelete.Quantity);
        const newQuantity = Quantity - productToDelete.Quantity;
        return {
          ShoppingCart: [...newShoppingCart],
          totalPrice: newTotalPrice,
          Quantity: newQuantity
        };
        case "Emty":
          return {
            ShoppingCart: [],
            totalPrice: 0,
            Quantity: 0
          };
       default : 
       return state
    //    
  }
}

export default CartReducer
