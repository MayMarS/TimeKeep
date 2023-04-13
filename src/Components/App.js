import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Products from './Route/Products/Products';
import Product from './Route/Product/Product';
import Watches from './Route/Watches/Watches';
import Jewelry from './Route/Jewelry/Jewelry';
import About from './Route/About/About';
import Contact from './Route/Contact/Contact';
import Account from './Route/Account/Account';
import Cart from './Route/Cart/Cart';
import Footer from './Footer/Footer';

function App(props) {
    return (
        <div className="App">
            <Header links={props.state.header.links}/>

            <Routes>
                <Route path="/" element={<Main main={props.state.main} />} />
                <Route path="/shop" element={<Products />} />
                <Route path="/product/:productId" element={<Product product={props.state.product}/>} /> 
                <Route path="/watches" element={<Watches />} /> 
                <Route path="/jewelry" element={<Jewelry />} /> 
                <Route path="/about" element={<About about={props.state.about}/>} /> 
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<Account />} /> 
                <Route path="/cart" element={<Cart />} /> 
            </Routes>

            <Footer footer={props.state.footer} social={props.state.footer.social}/>
        </div>
    )
}

export default App;


