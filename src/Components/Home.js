import React,{useState} from 'react'
import food from './Fooddata'
import Foodcards from './Foodcart/Foodcards'



const Home = () => {
    const [foods,setFoods] = useState(food)

    const filt =(filtitem)=>{
       const item =  food.filter((user)=>{
           return user.type === filtitem
       })

       setFoods(item);
       console.log(foods)
       console.log(item)
    }
    const filtall =()=>{
        setFoods(food)
    }
    
  return (
      <>
       <div className='container'>

<nav class="navbar navbar-light bg-light " style={{margin:'20px 0px 20px 0px'}}>
<div class="container-fluid justify-content-center">
<button class="btn btn-outline-success me-2"  onClick={()=>filtall()}  >All Food</button>
<button class="btn btn-outline-success me-2"  onClick={()=>filt("Breakfast")}>Breakfast</button>
<button class="btn btn-outline-success me-2"  onClick={()=>filt("Lounch")}>Lounch</button>
<button class="btn btn-outline-success me-2"  onClick={()=>filt("Dinner")}>Dinner</button>
</div>
</nav>
</div>
     <Foodcards foods={foods}/>
      
      
      </>
  )
}

export default Home