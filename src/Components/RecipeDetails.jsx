import React from "react"
import {useParams} from "react-router-dom"
import CurrentRecipe from "./CurrentRecipe"



export default function RecipeDetails(){
    const {recipeId} = useParams()
    const [currentRecipe, setCurrentRecipe] = React.useState([])
    
    
    React.useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
          .then (res => res.json())
          .then (data => {
            setCurrentRecipe(data.meals[0])
            renderSingleRecipe()
          })
    }, [recipeId])


    function renderSingleRecipe(){
      setCurrentRecipe(item => {
          return <CurrentRecipe 
              id= {item.idMeal}
              title = {item.strMeal}
              image= {item.strMealThumb}
              area = {item.strArea}
              group = {item.strCategory}
              instructions = {item.strInstructions}
              video = {item.strYoutube}
              ingredients = {[item.strIngredient1,item.strIngredient2,item.strIngredient3,item.strIngredient4,item.strIngredient5,item.strIngredient6,item.strIngredient7,item.strIngredient8,item.strIngredient9,item.strIngredient10,item.strIngredient11,item.strIngredient12,item.strIngredient13,item.strIngredient14,item.strIngredient15,item.strIngredient16,item.strIngredient17,item.strIngredient18,item.strIngredient19,item.strIngredient20,
              ]}
              measures = {[item.strMeasure1,item.strMeasure2,item.strMeasure3,item.strMeasure4,item.strMeasure5,item.strMeasure6,item.strMeasure7,item.strMeasure8,item.strMeasure9,item.strMeasure10,item.strMeasure11,item.strMeasure12,item.strMeasure13,item.strMeasure14,item.strMeasure15,item.strMeasure16,item.strMeasure17,item.strMeasure18,item.strMeasure19,item.strMeasure20,
              ]}
          />
        })
    }



    return (
        <div className='container current-recipe'>
            {currentRecipe}
        </div>
    )
}








// React.useEffect(()=>{
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
//       .then (res => res.json())
//       .then (data => {
//         // setCurrentRecipe(data.meals[0])
//         // renderSingleRecipe()
//         setCurrentRecipe([{
//             id: data.meals[0].idMeal,
//             title : data.meals[0].strMeal,
//             image: data.meals[0].strMealThumb,
//             area : data.meals[0].strArea,
//             group : data.meals[0].strCategory,
//             instructions : data.meals[0].strInstructions,
//             ingredients : [data.meals[0].strIngredient1,data.meals[0].strIngredient2,data.meals[0].strIngredient3,data.meals[0].strIngredient4,data.meals[0].strIngredient5,data.meals[0].strIngredient6,data.meals[0].strIngredient7,data.meals[0].strIngredient8,data.meals[0].strIngredient9,data.meals[0].strIngredient10,data.meals[0].strIngredient11,data.meals[0].strIngredient12,data.meals[0].strIngredient13,data.meals[0].strIngredient14,data.meals[0].strIngredient15,data.meals[0].strIngredient16,data.meals[0].strIngredient17,data.meals[0].strIngredient18,data.meals[0].strIngredient19,data.meals[0].strIngredient20
//             ],
//             measures : [data.meals[0].strMeasure1,data.meals[0].strMeasure2,data.meals[0].strMeasure3,data.meals[0].strMeasure4,data.meals[0].strMeasure5,data.meals[0].strMeasure6,data.meals[0].strMeasure7,data.meals[0].strMeasure8,data.meals[0].strMeasure9,data.meals[0].strMeasure10,data.meals[0].strMeasure11,data.meals[0].strMeasure12,data.meals[0].strMeasure13,data.meals[0].strMeasure14,data.meals[0].strMeasure15,data.meals[0].strMeasure16,data.meals[0].strMeasure17,data.meals[0].strMeasure18,data.meals[0].strMeasure19,data.meals[0].strMeasure20
//             ],
//             isFavorite: false, 
//         }])
//         // renderSingleRecipe()
//       })
// }, [recipeId])

// function toggleFavorite(){
//     setCurrentRecipe(prev => {
//         return prev.map (item => {
//             return {
//                 ...item, 
//                 isFavorite: !prev.isFavorite
//             }
//         })
//     })
// }

// console.log(currentRecipe)

// const currentRecipeContent = currentRecipe.map(item => {
//         return <CurrentRecipe 
//             id= {item.id}
//             title = {item.title}
//             image= {item.image}
//             area = {item.area}
//             group = {item.group}
//             instructions = {item.instructions}
//             ingredients = {item.ingredients}
//             measures = {item.measures}
//             isFavorite= {item.isFavorite}
//             toggleFav = {toggleFavorite}
//         />
//       })