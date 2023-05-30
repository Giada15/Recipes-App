import React from "react"
import IndexElement from "../Components/IndexElement.jsx"

export default function Home (){
  const [categoryAPI, setCategoryAPI] = React.useState ([])

  React.useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(data => {
        setCategoryAPI(data.categories.map(item => {
          return {
            key: item.idCategory,
            id: item.idCategory,
            title : item.strCategory,
            image: item.strCategoryThumb
          }
        }))
      })
  }, [])

  const indexContent = categoryAPI.map(item => {
    return <IndexElement 
    key= {item.key} 
    id= {item.id} 
    title= {item.title} 
    image= {item.image}
    />
  })

    return(
        <div className='container container-index'>
            {indexContent}
        </div>
    )
}

