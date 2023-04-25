import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/navbar/Navbar';
import Product from './components/Product/Product';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cart from './components/navbar/Cart';
import CartContextProvider from './components/Global/CartContext';
import NotFound from './components/NotFound';
import Footer from './Footer';
import SubFooter from './SubFooter';
function App() {
  return (
   <div>
   <CartContextProvider>
    <Router>
    <Navbar/>
    <Routes>
          <Route path='/' element={<Product/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
         
    </Routes>
    <Footer/>
   </Router>
   </CartContextProvider>
   
   </div>
  );
}

export default App;
/**
 * 
 *  <div>
     <Navbar/>
     
   
    </div>
 */