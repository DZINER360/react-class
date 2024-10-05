import { useState } from 'react'
// class 1 - 3
function App() {
  let animalDetails = [
    {
      name: 'dog',
      breed: 'Labrador',
      age: 1.5,
    },
    {
      name: 'tiger',
      breed: 'indian tiger',
      age: 3,
    },
    {
      name: 'elephant',
      breed: 'African elephant',
      age: 10,
    },
    {
      name: 'lion',
      breed: 'African lion',
      age: 4,
    }
  ]
  let count = 0;

  let x = animalDetails.map((item,index)=>{
            return (
              <div key = {index}>
                <h1>name : {item.name}</h1>
                <h1>native : {item.breed}</h1>
                <h1>status : {item.age}</h1>
              </div>
            )
  })

  return (
    <>  {/* { fragment ka use karke kisi bhi elemt ko wrap kr sakte hai wo frontend mein dikhega nai } */}
    <h1 className='bg-orange-400'>{count}</h1>
    <h1>{x}</h1>
       {/* <h1 >this is react vite boilerplate {import.meta.env.VITE_API}</h1> */}
    </>
  )
}

export default App
