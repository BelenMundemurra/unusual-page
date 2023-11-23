import React from 'react';

const ItemCount = ({stock,setCont,cont}) => {
    //Agregar cantidad producto
    function sum() {
        if (cont < stock) {
            setCont(cont + 1)
        }
    }

    //Restar cantidad producto
    function rest() {
        if (cont > 1) {
            setCont(cont - 1)
        }
    }

    return (
        <>
        <div className="card-count">
                <p className='stock-text'>Stock {stock}</p>
                <div>
                <p>Quantity</p>
                    <div className='container-count'>
                        <button className='btn-count' onClick={() => rest()}>-</button>
                        <button className='btn-count-num'>{cont}</button>
                        <button className='btn-count' onClick={() => sum()}>+</button> 
                    </div>
                </div>
        </div>
        </>
    );
}
export default ItemCount;
