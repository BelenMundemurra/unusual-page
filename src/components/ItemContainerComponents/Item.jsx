import React from 'react';
import {Link} from 'react-router-dom';

//Producto catálogo
const Item = ({el}) => {
    return (
        <div className='item_card' style={{width: '18rem'}}>
            <img src={el.img} className="card-img-top"></img>
            <div className="card_body">
                <h3 className="card_title">{el.name}</h3>
                <p className="card_price">$ {el.price}</p>
            </div>
            <Link className="btn_tran" to={"/item/"+el.id} element={el}>View Details</Link>
        </div>
    )
}

export default Item;