import React from 'react';
import {useCartContext} from '../context/CartContext';

//Porductos mostrados en el carrito
const ItemCart = ({product}) => {
    //RemoveItem => Eliminar un Item de Cart
    const {removeItem} = useCartContext();
    
    return (
        <>
            <div className="card-body">
                <img src={product.item.img}/>
                <div className='info-cart'>
                    <div>
                        <h3 className="card-title">{product.item.name}</h3>
                        <p className="card-text">Quantity: {product.amount}</p>
                        <p className="card-text">Price ${product.amount * product.item.price}</p>
                    </div>
                    <div>
                        <button className="btn_delete" onClick={() => removeItem(product.item.id)}>X</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemCart;
