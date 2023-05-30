import React from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { Context } from '../Context'

export default function Favorite(props){

    const {removeFromFavorite} = React.useContext(Context)

    return(
        <div className="index-element">
            <Link to={`/favorites/${props.id}`}>
                <img className="img-cirlce" src={props.image}/>
                <h3 className="img-title">{props.title}</h3>
            </Link>
                {/* <i className="delete" onClick={()=>removeFromFavorite(props.id)}><FontAwesomeIcon icon={faTrashCan} /></i> */}
     
        </div>
    )
}