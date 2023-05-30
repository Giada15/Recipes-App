import React from "react"
import { Context } from "../Context"
import Favorite from "../Components/Favorite"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Favorites(){
    const {favoriteRecipes}= React.useContext(Context)
    const [favoriteRecipesArr, setFavoriteRecipesArr] = React.useState([])


    React.useEffect(()=>{
    favoriteRecipes.map(item => (
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item}`)
            .then (res => res.json())
            .then (data => {
            setFavoriteRecipesArr(prev => [...prev, data.meals[0]])
            })
            ))
    }, [])



    const favoriteRecipesElements = favoriteRecipesArr.map(item => {
        return <Favorite
        key = {item.idMeal}
        id= {item.idMeal}
        title= {item.strMeal}
        image= {item.strMealThumb}
    />
})

       

    
//     function renderElements(){
//         setFavoriteRecipesArr (favoriteRecipesArr.map(item => {return <Favorite
//         key = {item.idMeal}
//         id= {item.idMeal}
//         title= {item.strMeal}
//         image= {item.strMealThumb}
//     />})
// )}
    


    return (
        <div className='container container-index'>
        {favoriteRecipes.length > 0 ? favoriteRecipesElements : <Link to="/">
            <h1 className="browse-recipe"><FontAwesomeIcon icon={faMagnifyingGlass} /></h1>
        </Link>}
        </div>
    )
}
