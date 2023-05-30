import {Link} from "react-router-dom"

export default function IndexElement (props){
    return(
        <div className="index-element">
            <Link to={`/category/${props.title}`}>
                <img className="img-cirlce" src={props.image} />
                <h3 className="img-title">
                {props.title}
                </h3>
            </Link>
        </div>
    )
}