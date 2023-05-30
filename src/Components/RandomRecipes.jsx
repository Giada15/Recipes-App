import React from "react"
import RandomRecipe from "./RandomRecipe.jsx"


export default function HighlightedRecipes(){

  const [recipe1, setRecipe1] = React.useState([])
  const [recipe2, setRecipe2] = React.useState([])
  const [recipe3, setRecipe3] = React.useState([])

  function randomRecipe(setRecipe){
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then (res => res.json())
    .then (data =>{
      setRecipe(
        <RandomRecipe 
        id = {data.meals[0].idMeal}
        title = {data.meals[0].strMeal}
        image = {data.meals[0].strMealThumb}
        category = {data.meals[0].strCategory}
        />
      )
    })
  }

  React.useEffect(()=>{
    randomRecipe(setRecipe1)
    randomRecipe(setRecipe2)
    randomRecipe(setRecipe3)
  }, [])

    return (
        <>
            {recipe1}
            {recipe2}
            {recipe3}
        </>
    )
}