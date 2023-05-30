import React from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Header from "./Components/Header.jsx"
import NavBar from "./Components/NavBar.jsx"
import ByCountry from "./Pages/ByCountry.jsx"
import Home from "./Pages/Home.jsx"
import RecipesCategories from "./Components/RecipesCategories"
import RecipeDetails from './Components/RecipeDetails'
import RandomRecipes from "./Components/RandomRecipes.jsx"
import RecipesCategoriesByCountry from "./Components/RecipesCategoriesByCountry.jsx"
import Favorites from './Pages/Favorites'
// import Favorite from './Components/Favorite'
import Name from "./Components/Name.jsx"
import ByName from './Pages/ByName'




function App() {


  return (
      <div className='main-container'>
        <Header/>
        <div className='width-container'>
        <div className='sub-container'>
            <NavBar/>

            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/category/:category' element={<RecipesCategories/>}></Route>
              <Route path='/recipeId/:recipeId' element={<RecipeDetails/>}></Route>
              <Route exact path='/favorites' element={<Favorites/>}></Route>
              <Route exact path='/favorites/:recipeId' element={<RecipeDetails/>}></Route>
              <Route exact path='/bycountry' element={<ByCountry/>}></Route>
              <Route path='/bycountry/:country' element={<RecipesCategoriesByCountry/>}></Route>
              <Route path='/byname' element={<Name />}></Route>
            </Routes>

            <div className='container-highlighted'>
              <h2>Highlighted recipes</h2>
              <div className='container-recipes-highlighted'>
                <RandomRecipes/>
              </div> 
            </div>

            <div className='container container-input'>
              <ByName />
            </div>
        </div>
        </div>
      </div>
  )
}

export default App


/* one problem encountered developing this app:

You can't have two different types of dynamic routes at one route. The browser has no way of differentiating between a and b, or in your case a username and a team name. So I cannot have this:
route="/:country"
route="/:recipeId"

What you can do is have subroutes, lets say /users and /teams, that have their own respective dynamic routes. So I have to do this:
route="/country/:country"
route="/recipeId/:recipeId"

*/
