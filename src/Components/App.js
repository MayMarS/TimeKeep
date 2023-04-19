import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Main from './Main/Main';
import Products from './Route/Products/Products';
import ProductCard from './Route/ProductCard/ProductCard';
import Watches from './Route/Watches/Watches';
import Jewelry from './Route/Jewelry/Jewelry';
import About from './Route/About/About';
import Contact from './Route/Contact/Contact';
import LogIn from './Route/Account/LogIn';
import SignUp from './Route/Account/SignUp';
import ResetPassword from './Route/Account/ResetPassword';
import Cart from './Route/Cart/Cart';
import Footer from './Footer/Footer';

function App(props) {
    return (
        <div className="App">
            <Header links={props.state.header.links}/>
            <Breadcrumbs />
            <Routes>
                <Route path="/Home" element={<Main main={props.state.main} />} />
                <Route path="/Shop" element={<Products />} />
                <Route path="/Shop/Product/:productId" element={<ProductCard product={props.state.product}/>} /> 
                <Route path="/Shop/Watches" element={<Watches />} /> 
                <Route path="/Shop/Jewelry" element={<Jewelry />} /> 
                <Route path="/About" element={<About about={props.state.about}/>} /> 
                <Route path="/Contact" element={<Contact />} />
                <Route path="/LogIn" element={<LogIn />} /> 
                <Route path="/SignUp" element={<SignUp />} /> 
                <Route path="/LogIn/Reset-password" element={<ResetPassword />} /> 
                <Route path="/Cart" element={<Cart />} /> 
            </Routes>
            <Footer footer={props.state.footer} social={props.state.footer.social}/>
        </div>
    )
}

export default App;


