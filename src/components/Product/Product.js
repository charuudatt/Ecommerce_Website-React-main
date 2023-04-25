import React , {useContext, useState} from 'react'
import { CartContext } from '../Global/CartContext';
import Bikeracing from "../Assets/Bikeracing.jpg";
import Major from "../Assets/Major.jpg";
import motocross from "../Assets/motocross.jpg";
import lamborghini from "../Assets/lamborghini.jpg";
import manwithsuite from "../Assets/manwithsuite.jpg";
import manwithsuite2 from "../Assets/menwithsuite2.jpg";
import Tshirt from "../Assets/t-shirt.png";
import Watch from "../Assets/Watch.jpg";
import Header from '../Header/Header';
import SubFooter from '../../SubFooter';

const ProductList = () => {
    const [products] = useState([
      {id:1, Name:"Bike racing", Price:20, Image:Bikeracing, Status:"game"},
      {id:2, Name:"Rich racing", Price:150, Image:lamborghini, Status:"game"},
      {id:3, Name:"Soldier-(One Man Army)", Price:100, Image:Major, Status:"game"},
      {id:4, Name:"Motocross", Price:10, Image:motocross, Status:"game"},
      {id:5, Name:"Black suite", Price:120, Image:manwithsuite, Status:"new"},
      {id:6, Name:"Mens suite", Price:80, Image:manwithsuite2, Status:"new"},
      {id:7, Name:"T-shirt", Price:10, Image:Tshirt, Status:"new"},
      {id:8, Name:"Watch", Price:50, Image:Watch, Status:"new"}
    ]);
  const {dispatch} = useContext(CartContext)
  // console.log(dispatch)
    return (
      <div>
     <div className='container'>
     <Header/>
         <div className='products-container'>
        {products.map(product => (
          <div key={product.id} className="product">
           <div className='Cover'>
           <div className='product-image'> <img src={product.Image} alt={product.Name} /></div>
           <div className='productDetails'>
           <div className='product-name'>
           <h3>{product.Name}</h3>
           </div>
            <div className='product-price'>
            <p>${product.Price}.00</p>
            </div>
           </div>
           {product.Status == "game" ? <div className='game'>Game</div>:""}
           {product.Status == "new" ? <div className='new'>NEW</div>:""}
           </div>
           <div className='add-to-cart' onClick={()=>{dispatch({type : "Add" , id : product.id , product})}}>ADD TO CART</div>
          </div>
        ))}
      </div>
      
     </div>
     <SubFooter/>
     </div>
    );
  };
  
  export default ProductList;