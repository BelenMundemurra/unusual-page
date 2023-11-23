import {React, useState, useEffect} from 'react';  
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router';
import { doc,getDoc} from 'firebase/firestore';
import {db} from '../services/firebase';
import {Spinner} from 'reactstrap'

const ItemDetailContainer = () => {
    //Obtener Id del parametro
    let {id} = useParams();

    //Datos del Item
    const [Item, setItem] = useState() 
    
    //Espera de datos para utilizar el spinner
    const [loadData,setLoadData] = useState(true);
    
    const getSelected = async (idItem) => {
        try {
            const document = doc(db,"ItemCollection",idItem);
            const response = await getDoc(document);
            const result = {id: response.id, ...response.data()}
            setItem(result)
            setLoadData(false)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, []);

    return (
        <>
        <section className='title-section container-fluid'>
            {loadData ? <div className='spinner'><Spinner/></div> : <ItemDetail key={id} el={Item} />}
        </section>
        </>
    );
}

export default ItemDetailContainer;