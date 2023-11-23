import {React, useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from '../context/CartContext';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetail = () => {

    const {id} = useParams()
    const [data,setData] = useState([]);
    
    //Obtener producto de firebase mediante id (useParams)
    useEffect(() => {
        const querydb = getFirestore();
        const querydoc = doc(querydb,'ItemCollection',id);
        getDoc(querydoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [])

    const [cont, setCont] = useState(1);
    const {addItem, cart} = useCartContext();

    //Agregar Item al carrito
    function onAdd(el,amount) {
        addItem(el , amount);
    } 

    return (
        <>
            <div className='card-detail'>
                <img src={data.img}></img>
                <div>
                    <h3 className="card-detail-title">{data.name}</h3>
                    <p>{data.descrip}</p>
                    <p className="card-detail-price">${data.price}</p>
                    <div className='btn-detail'>
                        {cart.some((el) => el.item.id === data.id) ? 
                            <div>
                                <p className='success-text'>Item successfully added to your cart!</p>
                                <Link to="/cart" className='btn_tran'>GO TO CART</Link>
                            </div> 
                                :   
                            <div>
                                <ItemCount stock={data.stock} setCont={setCont} cont={cont}/>
                                <button onClick={() => onAdd(data,cont)} className='btn_tran'>ADD TO CART</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;
