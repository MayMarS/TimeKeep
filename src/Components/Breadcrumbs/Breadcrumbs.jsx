import './Breadcrumbs.scss';
import {Link, useLocation} from 'react-router-dom';

const Breadcrumbs = () => {

    const location = useLocation();
    // console.log(location);
    let currentLink = '';

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currentLink += `/${crumb}`

        return(
            <div className="crumb">
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )
    })
    return(
        <div className="crumbs-div">
            <div className="crumb">
                <Link to="/" className="crumb-home"></Link>
            </div>
            {crumbs}
        </div>
    )
}

export default Breadcrumbs;