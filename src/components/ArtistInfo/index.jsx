import React from 'react'
import blackPic from '/src/assets/6lack.jpeg'
import mariahPic from '/src/assets/Mariah.png'

export default function artist({setCount,setCount2,count,count2}) {


  return (

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
        <div className = "songs" id ="song1">
          <img src = {mariahPic} width={50}></img>
          all i want, release:1990
        </div>
        <div className = "songs" id ="song2">
          <img src = {mariahPic} width={50}></img>
          all i want, release:1990
        </div>
      </div>
    </div>
    
    </div>  

    <div className = "blackSection">
    <img src={blackPic} width={250} alt ="6lack Album"></img>
  
    <div className = "p4">6lack  
    <button className= "likebtn" onClick={()=> setCount2((count2) => count2+1)}>❤️ {count2} likes</button>
    </div>
    
    <div className = "p5">East Atlanta Love Letter</div>
    <div className = "p6">bwgfwgduwvdgwvhwhuwgyiu</div>
    </div>
    </div>

  )
};
