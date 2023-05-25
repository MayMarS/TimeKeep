import './Main.scss';
import PrimeSection from './PrimeSection/PrimeSection';
import Categories from './Categories/Categories';
import Trending from './Trending/Trending';
import ViewedProducts from './ViewedProducts/ViewedProducts';
import Feachures from './Feachures/Feachures';

const Main = (props) => {
    window.scrollTo(0,0);
    return (
        <main>
            <PrimeSection />
            <Categories /> 
            <Trending />
            <ViewedProducts />
            <Feachures feachures={props.main.feachures}/>
        </main>
    )
}

export default Main;