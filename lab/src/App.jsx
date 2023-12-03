import React  ,{ useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  // const [data, setData] = useState('')
  const [info, setInfo] = useState([])

  useEffect(() => {
    
    // fetch(`https://jsonplaceholder.typicode.com/users`)
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(res=>{setInfo(res.data.results)})
    
    .catch(function (error) {
      console.log(error);
    })

  }, []);

  return (
    <>
    <p className='text-center text-3xl p-10'>The Rick and Morty character</p>
      <div className='flex flex-wrap items-center justify-center gap-10'>
        {info.map((item, index)=>(
          <div key={index} className='w-80 border rounded-lg text-center flex flex-col items-center justify-center'>
            <p className='p-2'>{item.name}</p>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
