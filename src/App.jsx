import './App.css'
import JustList from './components/JustList'
import Header from './components/Header'
import TextInput from './components/TextInput'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [inputValue,setInputValue] = useState('')
  const [listValue,setListValue] = useState([])
  function inputChangeHandler(event) {
    setInputValue(event.target.value)
    console.log(inputValue);
  }

  function clickHandler(inputValue) {
    console.log("Button is clicked")
    if(inputValue) {
      setListValue(currentList => {
        const newList = [...currentList, inputValue];
        console.log(inputValue + " Pushed");
        return newList;
      })
    }
    setInputValue('')
  }
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <TextInput value={inputValue} onChange={inputChangeHandler}/>
      <Button onClick={()=>clickHandler(inputValue)}>Add</Button>
      <JustList items={listValue}/>
    </main>
    </>
  )
}

export default App
