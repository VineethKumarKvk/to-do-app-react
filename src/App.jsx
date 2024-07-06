import './App.css';
import JustList from './components/JustList';
import Header from './components/Header';
import TextInput from './components/TextInput';
import Button from './components/Button';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const TODO_COOKIE = 'todoList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [listValue, setListValue] = useState(() => {
    const savedList = Cookies.get(TODO_COOKIE);
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    Cookies.set(TODO_COOKIE, JSON.stringify(listValue), { expires: 7 });
  }, [listValue]);

  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }

  function clickHandler() {
    console.log('Button is clicked');
    if (inputValue) {
      setListValue(currentList => {
        const newList = [...currentList, inputValue];
        return newList;
      });
      setInputValue('');
    }
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <TextInput value={inputValue} onChange={inputChangeHandler} />
        <Button onClick={clickHandler}>Add</Button>
        <JustList items={listValue} /> {/* Use listValue instead of LIST_TO_DO */}
      </main>
    </>
  );
}

export default App;
