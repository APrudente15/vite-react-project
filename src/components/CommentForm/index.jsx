import React from 'react'

export default function commentForm({inputText, setInputText, comment, setComment}) {

    function handleInput(e) {
        setInputText(e.target.value)
      }
      function handleSubmit(e) {
        e.preventDefault()
        setComment([...comment, {text:inputText}])
        setInputText("")
      }

  return (
    <div>      
    <form id = "commentSection" onSubmit = {handleSubmit}>
    <input type = "text" onChange={handleInput} value = {inputText}></input>
    <button type = "submit">Submit</button>
    </form>
  
  </div>
  )
};
