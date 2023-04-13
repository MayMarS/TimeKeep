import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Watches from './Route/Watches/Watches';
import Jewelry from './Route/Jewelry/Jewelry';
import About from './Route/About/About';
import UserAccount from './Route/UserAccount/UserAccount';
import UserCart from './Route/UserCart/UserCart';
import Products from './Route/Products/Products';
import Product from './Route/Product/Product';
import Footer from './Footer/Footer';

function App(props) {
    return (
        <div className="App">
            <Header links={props.state.header.links}/>

            <Routes>
                <Route path="/" element={<Main main={props.state.main} />} />
                <Route path="/watches" element={<Watches />} /> 
                <Route path="/jewelry" element={<Jewelry />} /> 
                <Route path="/about" element={<About about={props.state.about}/>} /> 
                <Route path="/account" element={<UserAccount />} /> 
                <Route path="/cart" element={<UserCart />} /> 
                <Route path="/products" element={<Products />} />
                <Route path="/product/:productId" element={<Product product={props.state.product}/>} /> 
            </Routes>

            <Footer footer={props.state.footer} social={props.state.footer.social}/>
        </div>
    )
}

export default App;


