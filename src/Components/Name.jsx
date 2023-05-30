import React from "react"
import IndexName from "../Components/IndexName.jsx"

import {Context} from "../Context.jsx"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



export default function Name (){
const {recipesByName, setRecipesByName} = React.useContext(Context)

function recipeContent (){
    if (recipesByName.length > 0){
        return recipesByName.map(item => {
            return <IndexName
            key= {item.key} 
            id= {item.id} 
            title= {item.title} 
            image= {item.image}
            />
            })
    }else {
        return <div className="no-recipes-found">
            <h3>Not found</h3>
            <Link to="/">
            <h1 className="browse-recipe"><FontAwesomeIcon icon={faMagnifyingGlass} /></h1>
            </Link>
            </div>
    }
}

    return (
        <div className='container container-index'>
        {/* <h1>Hello</h1> */}
        {recipeContent()}
        </div>
    )
}

