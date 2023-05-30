import {Link} from "react-router-dom"

export default function ByCountryIndex(props){
    return (
        <div className="index-element">
            <Link to={`/bycountry/${props.country}`}>
            <img className="img-cirlce" 
            src={`/img/${props.country}.png` }
            alt="" style={{opacity: "0.80", backgroundColor: "#D9D9D9", mixBlendMode: "multiply"}}/>
            <h3  className="img-title">{props.country}</h3>
            </Link>
        </div> 
    )
}

