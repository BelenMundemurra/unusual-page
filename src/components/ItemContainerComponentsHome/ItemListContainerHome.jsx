import {React, useState, useEffect} from 'react';  
import ItemListHome from '../ItemContainerComponentsHome/ItemListHome';
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../services/firebase';
import {Spinner} from 'reactstrap'

const ItemListContainerHome = () => {

    //Lista de productos
    const [productsList, setProductos] = useState([]);
    //Tiempo de espera para utilizarlo con spinner
    const [loadData,setLoadData] = useState(true);

    //Consultar coleccion firebase de productos
    const getData = async () => {
        try {
            const document = collection(db,"ItemCollection")
            const col = await getDocs(document)
            const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
            setProductos(result)
            setLoadData(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
        {loadData ? <div className='spinner'>< Spinner/></div> : 
            <section>
                <p className='cat_title'>The Collection</p>
                <ItemListHome productsList={productsList}/>
            </section>    
        }
        </>
    );
}

export default ItemListContainerHome;