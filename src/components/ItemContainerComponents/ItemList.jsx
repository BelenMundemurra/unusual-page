import {React} from 'react';
import Item from '../ItemContainerComponents/Item';

//Lista de productos
const ItemList = ({productsList}) => {
    return (
        <div className='row cat-product'>
            {productsList.map((product) => <Item key={product.id} el={product}/>)}
        </div>
    );
}

export default ItemList;


