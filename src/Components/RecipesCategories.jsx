import React from "react"
import {useParams} from "react-router-dom"
import Recipe from "./Recipe.jsx"


export default function RecipesCategories (){
    const {category} = useParams()
    //category = "beef" for example (this comes from the url- Link to of Index Element)
    
    const [group, setGroup]= React.useState({
        Beef: [],
        Chicken: [],
        Dessert: [],
        Lamb: [],
        Miscellaneous: [],
        Pasta: [],
        Pork: [],
        Seafood: [],
        Side: [],
        Starter: [],
        Vegan: [],
        Vegetarian: [],
        Breakfast: [],
        Goat: [], 
      })
    

    React.useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
          .then (res => res.json())
          .then (data => {
            setGroup(prevGroup => {
              return {
              ...prevGroup,
              [category]: data.meals
              }
            })
            renderRecipes(category)
          })
    }, [])

    
    function renderRecipes(categ){
        setGroup(prevGroup => {
          return {
            [categ] : prevGroup[categ].map(item =>{
            return <Recipe
              key = {item.idMeal}
              id= {item.idMeal}
              title= {item.strMeal}
              image= {item.strMealThumb}
            />
          })}
        })
      }

    return(
        <div className='container container-index'>
            {Object.values(group)[0]}
        </div>
    )
}