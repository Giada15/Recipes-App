import React from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context.jsx"

export default function ByName(){
    // const[formData, setFormData] = React.useState({name: ""})
    // const [recipesByName, setRecipesByName] = React.useState([])

    const {formData, setFormData} = React.useContext(Context)
    const {recipesByName, setRecipesByName} = React.useContext(Context)

    function handleChange(e){
        setFormData({[e.target.name] : e.target.value})
    }

    function handleSearch(){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${formData.name}`)
        .then(res => res.json())
        .then(data => {
            if (data.meals !== null){
                setRecipesByName(data.meals.map(item => {
                    return {
                        key: item.idMeal,
                        id: item.idMeal,
                        title : item.strMeal,
                        image: item.strMealThumb
                        }
                }))  
            }else{
                setRecipesByName([])
            }
        }) 
    
        setFormData({name: ""})
    }

    return (
        <form>
            <input name="name" className="input" type="text" placeholder='SEARCH BY NAME' onChange={handleChange} value= {formData.name}/>
            <Link to="/byname" > 
                <button className="input-btn" onClick={handleSearch}>Search</button>
            </Link>
        </form>
    )
}

