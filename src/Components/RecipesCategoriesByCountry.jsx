import React from "react"
import {useParams} from "react-router-dom"
import Recipe from "./Recipe"


export default function RecipesCategoriesByCountry() {
const {country} = useParams()

const [indexCountries, setIndexCountries] = React.useState({
    American: [],
    British: [],
    Canadian: [],
    Chinese: [],
    Croatian: [],
    Dutch: [],
    Egyptian: [],
    French: [],
    Greek: [],
    Indian: [],
    Irish: [],
    Italian: [],
    Jamaican: [],
    Japanese: [], 
    Kenyan: [], 
    Malaysian: [], 
    Mexican: [], 
    Moroccan: [], 
    Polish: [], 
    Portuguese: [], 
    Russian: [], 
    Spanish: [], 
    Thai: [], 
    Tunisian: [], 
    Turkish: [], 
    Unknown: [], 
    Vietnamese: []
    })

React.useEffect (()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    .then(res => res.json())
    .then (data => {
        setIndexCountries(prevCountries => {
        return {
        ...prevCountries,
        [country]: data.meals
        }
        })
        renderRecipesCountries(country)
    })
}, [])


function renderRecipesCountries(element){
    setIndexCountries(prevIndex => {
        return {
        [element] : prevIndex[element].map(item =>{
        return <Recipe
            key = {item.idMeal}
            id= {item.idMeal}
            title= {item.strMeal}
            image= {item.strMealThumb}
        />
        })}
    })
}

return (
    <div className='container container-index'>
      {Object.values(indexCountries)[0]}
    </div>
)

}


