import { useState } from "react"
import { useEffect } from "react"



function App() {
  const [meal, setmeal] = useState ([])

  useEffect(()=>{
    const fetchmeal = async () => {
      try {
        const res = await fetch('https://feedme-api.onrender.com/');
        const data = await res.json();
        setmeal(data);
        }

      catch (error) {
        console.log('error fetching data')
        
      }
    }
    fetchmeal();
  },[]);
  
  return (
    <>
    <ul className="meal">
      {meal.flatMap((food,index)=> (
        <li key={index}>{food.name}</li>
      ))}
    </ul>
    <button> 
      click me 
    </button>

    </>
  )
}

export default App
