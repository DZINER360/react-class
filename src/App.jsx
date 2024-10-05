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
