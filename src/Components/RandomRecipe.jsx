import {Link} from "react-router-dom"

export default function RandomRecipe(props) {
    return(
        <div className="recepe-highlighted" onClick={props.getHighlightedRecipe}>
            <Link to={`/recipeId/${props.id}`}>
            <img className="img-cirlce img-highlighted" src={props.image} alt="" />
            <h3 className="img-title">{props.title}</h3>
            </Link>
        </div>
    )
}