import './Main.scss';
// import { Route, Routes } from 'react-router-dom';
import PrimeSection from './PrimeSection/PrimeSection';
import Categories from './Categories/Categories';
import Trending from './Trending/Trending';
import Feachures from './Feachures/Feachures';

const Main = (props) => {
    window.scrollTo(0,0);
    return (
        <main>
            <PrimeSection />
            <Categories /> 
            <Trending />
            <Feachures feachures={props.main.feachures}/>
        </main>
    )
}

export default Main;