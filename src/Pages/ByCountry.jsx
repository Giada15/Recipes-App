import React from "react"
import ByCountryIndex from "../Components/ByCountryIndex.jsx"
import { nanoid } from "nanoid"


export default function ByCountry(){

const [listOfCountries, setListOfCountries] = React.useState([])

React.useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then(res => res.json())
    .then(data => {
      setListOfCountries(data.meals.map(item => {
        return {
        key: nanoid(),
        country: item.strArea
        }
      }))
    })
  }, [])

  const listOfCountriesContent = listOfCountries.map(item => {
    return <ByCountryIndex
            key={item.key} 
            country={item.country}
            />
  })

return (
    <div className='container container-index'>
        {listOfCountriesContent}
    </div>
)

}





  

