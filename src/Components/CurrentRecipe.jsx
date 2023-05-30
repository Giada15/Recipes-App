import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUtensils, faList } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from "react"
import { Context } from '../Context'


export default function CurrentRecipe(props){

    const {favoriteRecipes, addToFavorite, removeFromFavorite} = useContext(Context)

    function heartIcon(){
        if(favoriteRecipes.includes(props.id)){
            return <i className=' favorite-hover favorite' onClick={() => removeFromFavorite(props.id)}><FontAwesomeIcon icon={faHeart} /></i>
        }else{
            return <i className='favorite-hover not-favorite' onClick={() => addToFavorite(props.id)}><FontAwesomeIcon icon={faHeart} /></i>
        }
    }

    return (
        <div className="current-meal">
        
                <img src={props.image}/>
                <h3>{props.title} {heartIcon()}</h3>
                    
                <div className="info-meal">
                    <div className='cuisine-category'>
                        <p><FontAwesomeIcon icon={faUtensils} /></p>
                        <p>Cuisine: {props.area}</p>
                    </div>
                    <div className='cuisine-category'>
                        <p><FontAwesomeIcon icon={faList} /></p>
                        <p>Category: {props.group}</p>
                    </div>
                </div>
            
                <p className="preparation">Preparation</p>
                <p className="instruction">{props.instructions}</p>
            
            {/* <p>{props.ingredients}</p> */}
            
        </div>
        
    )
}