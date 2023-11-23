import {React} from 'react';
import ItemHome from '../ItemContainerComponentsHome/ItemHome';

//Lista de productos
const ItemListHome = ({productsList}) => {
    return (
        <div className='row cat-product'>
            {productsList.map((product) => <ItemHome key={product.id} el={product}/>)}
        </div>
    );
}

export default ItemListHome;


