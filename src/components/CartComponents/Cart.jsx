import React from 'react';
import { useCartContext } from '../context/CartContext';
import {Link} from 'react-router-dom';
import ItemCart from './ItemCart';

const Cart = () => {
    
    const {cart,totalPrice, clearCart} = useCartContext();

    //Si el carrito (cart) no contiene productos
    if (cart.length === 0) {
        return (
            <>
            <div className='empty-cart'>
                <p className='cat_title shop-title'>Shopping Cart</p>
                <p className='empty-text-cart'>Cart is currently empty. Explore Our Products!</p>
                <div>
                    <Link className='btn_tran btn_cart' to='/category/shop'>SHOP NOW</Link>
                </div>
            </div>
            </>
        );
    } else {
        //El carrito (cart) contiene productos
        return (
            <>
            <div className='list-cart'>
                    <p className='cat_title shop-title '>Shopping Cart</p>
                    <div className='cart-info'>
                        {cart.map(item => <ItemCart key={item.item.id} product={item}/>)}
                    </div>
                    <p className='price-cart'>Total Price: ${totalPrice()}</p>  
                    <div className='btn-cart'>
                        <button className='btn_tran' onClick={clearCart}>Remove All Items</button>
                        <Link className='btn_tran btn_cart_end' to='/checkout'>Go to Checkout</Link>
                    </div>
            </div>
            </>
        )
    }
}

export default Cart;
