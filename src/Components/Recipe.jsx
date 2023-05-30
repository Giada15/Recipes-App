import {Link} from "react-router-dom"

export default function Recipe(props){

    return(
        <div className="index-element">
            <Link to={`/recipeId/${props.id}`}>
                <img className="img-cirlce" src={props.image}/>
                <h3 className="img-title">{props.title}</h3>
            </Link>
        </div>
    )
}