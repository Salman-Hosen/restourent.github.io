import React from 'react'

const Foodcards = ({foods}) => {

  return (
      
    <>
    <div className='container'>
    <div className='row' >
    {foods.map((user,index)=>{ 
        return<div class="col-sm-4" key={index}>
            
            <div class="card">
      <div class="card-body">
          <img src={user.image} alt={"Salman"} style ={{height:"300px",width:"400px"}} />
          <h2>{user.type}</h2>
        <h5 class="card-title">{user.Name}</h5>
        <p class="card-text">{user.Description}</p>
        <a href='s' className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
           
   
    })}
   </div>
   </div>
       
    </>
   
  )
}

export default Foodcards