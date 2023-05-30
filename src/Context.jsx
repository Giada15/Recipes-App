import React from "react";

const Context = React.createContext()

function ContextProvider(props){
    const [favoriteRecipes, setFavoriteRecipes] = React.useState([])

    const [formData, setFormData] = React.useState({name: ""})
    const [recipesByName, setRecipesByName] = React.useState([])

    function addToFavorite(recipeId){
        setFavoriteRecipes(prev => {
             if(!prev.includes(recipeId)){
                return [...prev, recipeId]
             }else{
                return [...prev]
             }
        })
    }

    function removeFromFavorite(recipeId){
        setFavoriteRecipes(prevItems => prevItems.filter(item => item !== recipeId))
    }
    
    // console.log(favoriteRecipes)

    return (
        <Context.Provider value={{favoriteRecipes, addToFavorite, removeFromFavorite, formData, setFormData, recipesByName, setRecipesByName}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}