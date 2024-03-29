import React from 'react'

function MenuCard({menuData}) {
    //console.log(menuData)
  return (
    <>
    <section className="main-card--cointainer ">
    {menuData.map((element)=>{
         const { id, name, category, image, description } = element;
        return(
<>
<div className="card-container" key={element.id}>
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description">
                {description}
                </span>
                <div className="card-read">Read</div>
            </div>
           <img src={image} alt="images" className='card-media'/> 
            <span className='card-tag subtle'>Order Now</span>
        </div>
      </div>   
      </>
        )
    })}
      </section>

     
    </>
  )
}

export default MenuCard
