import {Link} from "react-router-dom"

export default function NavBar(props) {
    return(
        <div className="container container-navbar">
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <li><Link to="/bycountry">By Country</Link></li>
            </ul>
        </div>
    )
}