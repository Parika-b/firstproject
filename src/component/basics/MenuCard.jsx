import React from 'react'

const MenuCard = ({menuData}) => {
   
  return (
    <>

  
     <div className='card_container'>
      <div className='card'>
        <div className='card_body'>
          <span className='card-number card-circle'>1</span>
          <span className='card-author' style={{color:"red"}}>Breakfast</span>
          <h2 className='card-title'>Maggi</h2>
          <span classname='card-description'>I love maggi and its my first and 
          last breakfast.I am happy I like it</span>
          <div className='card-read'>Read</div>
          
          
        </div>
        {/*<img src={image} alt="images" className='card-media'></img>*/}
        <span className='card-tag subtle'>Order Now</span>
        
      </div>
    </div>
      
    </>
  )
}

export default MenuCard
