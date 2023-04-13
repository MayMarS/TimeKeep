import './Main.scss';
// import { Route, Routes } from 'react-router-dom';
import PrimeSection from './PrimeSection/PrimeSection';
import Categories from './Categories/Categories';
import Trending from './Trending/Trending';
import Feachures from './Feachures/Feachures';

const Main = (props) => {
    return (
        <main>
            <PrimeSection />
            <Categories /> 
            <Trending />
            <Feachures main={props.main}/>
        </main>
    )
}

export default Main;