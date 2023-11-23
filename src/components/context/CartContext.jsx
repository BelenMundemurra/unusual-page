import React, {useState, useContext} from 'react';

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    //Agregar un producto
    const addItem = (item, newAmount) => {
        const {amount = 0} = cart.find(prod => prod.item.id === item.id) || [];
        const newCart = cart.filter(prod => prod.item.id !== item.id)
        setCart([...newCart, {item,amount: amount + newAmount}])
    }

    //Eliminar un producto
    const removeItem = (id) => {
        setCart(cart.filter(product => product.item.id !== id));
    }

    //Averiguar si esta en el carrito
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    //Limpiar carrito
    const clearCart = () => setCart([]); 

    //Total precio
    //Resultado se acumula en prev
    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.amount * act.item.price,0);
    }

    //Total productos
    const totalProducts = () => cart.reduce((acumulador, productActual) => acumulador + productActual.amount, 0);

    return (
        <>
            <CartContext.Provider value={{addItem,removeItem,isInCart,clearCart,totalPrice,totalProducts,cart}}>
                {children}
            </CartContext.Provider>
        </>
    );
}