import {React} from 'react';  
import ItemListContainerHome from '../ItemContainerComponentsHome/ItemListContainerHome';
import Carousel from 'react-bootstrap/Carousel';
import {NavLink} from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img"
                        src="https://firebasestorage.googleapis.com/v0/b/ecommerce-react---coderhouse.appspot.com/o/home.png?alt=media&token=88b12b04-2354-422c-9d9d-21040399d16e"
                        alt="First slide"/>
                        <Carousel.Caption>
                            <h3>The Basic Collection</h3>
                            <p>Solutions For Every Body</p>
                            <NavLink className="nav-link" to="/category/shop">SHOP</NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img carousel-img-second"
                        src="https://dbknews.s3.amazonaws.com/uploads/2019/09/skims2-e1567643295802.jpeg"
                        alt="Second slide"
                        />
                        <Carousel.Caption className='second'>
                            <h3>Don't Limit Yourself</h3>
                            <p>These Clothes Adapt To Every Body</p>
                            <NavLink className="nav-link" to="/category/shop">SHOP</NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='home_products'>
                <div>
                    <ItemListContainerHome/>
                    <div className='shop-link'><NavLink className="nav-link home-link" to="/category/shop">SHOP NOW</NavLink></div>
                    
                </div>
            </div>
        </>
    );
}

export default Home;
