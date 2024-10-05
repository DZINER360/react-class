import { useState } from 'react'
// class 3

  let info = () =>{
    console.log("hello world")
  }
  let advanced = (data) =>{
    console.log(data)
  }
function App() {
    return (
        <div>
          <button onClick={info} className='bg-pink-300 rounded py-2 px-5' >hello ji</button>
          <button onClick={()=>advanced("react worldd")} className='bg-orange-600 rounded py-2 px-5' >hello to you</button>
        </div>
      )
}

export default App




// // class 1 - 3
// function App() {
//   let animalDetails = [
//     {
//       name: 'dog',
//       breed: 'Labrador',
//       age: 1.5,
//     },
//     {
//       name: 'tiger',
//       breed: 'indian tiger',
//       age: 3,
//     },
//     {
//       name: 'elephant',
//       breed: 'African elephant',
//       age: 10,
//     },
//     {
//       name: 'lion',
//       breed: 'African lion',
//       age: 4,
//     }
//   ]
//   let count = 0;
//   let x = animalDetails.map((item,index)=>{
//             return (
//               <div key = {index}>
//                 <h1>name : {item.name}</h1>
//                 <h1>native : {item.breed}</h1>
//                 <h1>status : {item.age}</h1>
//               </div>
//             )
//   })
// }