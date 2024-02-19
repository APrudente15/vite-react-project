import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import blackPic from './assets/6lack.jpeg'
import mariahPic from './assets/Mariah.png'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {

  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)

  const [inputText, setInputText] = useState("")
  const [submitValue, setsubmitValue] = useState("")

  function handleInput(e) {
    setInputText(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    setsubmitValue(inputText)
  }

  return (
    <div>
      <h1>Music Moves</h1>
      <div className= "container">
      <div className="mariahSection">
      <img src={mariahPic} width={250} alt ="MariahCarey's Album"></img>


      <div className = "p1">Mariah Carey
      <button className= "likebtn" onClick={()=> setCount((count) => count+1)}>❤️ {count} likes</button>
      
      </div>


      <div className = "p2">The Rarities</div>
      <div className = "p3">bwgfwgduwvdgwvhwhuwgyiu</div>
      <div className = "songList">
        <div id ="musicList">
          <div class = "songs" id ="song1">
            <img src = {mariahPic} width={50}></img>
            all i want, release:1990
          </div>
          <div class = "songs" id ="song2">
            <img src = {mariahPic} width={50}></img>
            all i want, release:1990
          </div>
        </div>
      </div>
      
      </div>  

      <div class = "blackSection">
      <img src={blackPic} width={250} alt ="6lack Album"></img>
    
      <div className = "p4">6lack  
      <button className= "likebtn" onClick={()=> setCount2((count2) => count2+1)}>❤️ {count2} likes</button>
      </div>
      
      <div className = "p5">East Atlanta Love Letter</div>
      <div className = "p6">bwgfwgduwvdgwvhwhuwgyiu</div>
      </div>
    
      <form id = "commentSection" onSubmit = {handleSubmit}>
        <input type = "text" onChange={handleInput}></input>
        <button type = "submit">Submit</button>
      </form>

    </div>
    </div>
  )
}

export default App
