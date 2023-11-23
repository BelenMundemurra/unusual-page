import {React, useState} from 'react';
import {useCartContext} from '../context/CartContext';
import {db} from '../services/firebase';
import {addDoc,collection} from 'firebase/firestore';
import {Link} from 'react-router-dom';


const Checkout = () => {

    const {cart,totalPrice,clearCart} = useCartContext();
    const [buyer, setBuyer] = useState({name:'',email:'',tel:''})  
    const [orderData, setOrder] = useState()
    const {name,email,tel} = buyer;

    //Enviar pedido a firebase => Orders
    const Order = async(data) => {
            try {
                const col = collection(db,"Orders")
                const resume = await addDoc(col,data)
                setOrder(resume)
                clearCart();
            } catch (error) {
                console.log(error);
            }
    }

    //Datos del cliente 
    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })
    } 

    //Datos de la orden
    const handleSubmit = (element)  => {
        element.preventDefault()
        const items = cart.map(e => {return {id:e.item.id,title: e.item.name, price: e.item.price,amount: e.amount}})
        const date = new Date()
        const total = totalPrice()
        const data = {buyer,items,date,total}
        Order(data)
    }

    return (
        <div>
            <div className='checkout-container'>{!orderData?
            (<div className='checkout-complete'>
                <h4>CHECKOUT</h4>
                <p>Please Provide the Necessary Details to Complete Your Purchase.</p>
                <form className='form_checkout' onSubmit={handleSubmit}>
                    <div>
                        <div className='form_input'>
                            <label htmlFor="name">First Name</label>
                            <input type='text' name='name' onChange={handleInputChange} value={name} required/>
                            <label htmlFor="email">Email address</label>
                            <input type='email' name='email' onChange={handleInputChange} value={email} required/>
                            <label htmlFor="tel">Phone</label>
                            <input type='text' name='tel' onChange={handleInputChange} value={tel} required pattern="[0-9]*" title="Debe ingresar un número teléfonico"/>
                        </div>
                        <div  className='btn-container-form'>
                            <input className='btn-form btn_tran' type="submit"/>      
                            <Link to='/cart'>Cancel</Link>  
                        </div>
                    </div> 
                </form>
            </div>) 
            : (
                <div className='checkout-complete checkout-success'>
                    <h4>Thank You for Your Purchase! Transaction Successful.</h4>
                    <p>Your order number is: {orderData.id}</p>
                    <Link className='btn_tran btn-form' to='/'>Return to Store</Link>
                </div>
            )}
            </div>
        </div>
    );
}

export default Checkout;
