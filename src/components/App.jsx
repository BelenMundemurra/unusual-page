import React from 'react';
import {HashRouter,Routes,Route} from 'react-router-dom'
import '../style/styles.css';
import NavbarComp from "./Navbar";
import ItemListContainer from './ItemContainerComponents/ItemListContainer';
import ItemDetailContainer from './ItemDetailComponents/ItemDetailContainer';
import Error404 from './Error404';
import Cart from './CartComponents/Cart';
import {CartProvider} from './context/CartContext';
import Checkout from './CartComponents/Checkout';
import Home from './Home/Home';
import Footer from './Footer';
const App = () => {
    return (
        <>
            <HashRouter>
                <CartProvider>
                    <NavbarComp/>
                    <Routes>
                        <Route path='/unusual-page' element={<Home/>} />
                        <Route path='/category/shop' element={<ItemListContainer/>} />
                        <Route path='/item/:id' element={<ItemDetailContainer/>} />
                        <Route path='/cart' element={<Cart/>} />
                        <Route path='/checkout' element={<Checkout/>} />
                        <Route path='*' element={<Home/>}/>
                    </Routes>
                </CartProvider>
                <Footer/>
            </HashRouter>
        </>
    );
}

export default App;


