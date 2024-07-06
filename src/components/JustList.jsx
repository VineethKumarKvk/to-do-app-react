import { useState } from "react";
import './JustList.css'

function JustList({items}) {
  const [check,setCheck] = useState([]);

  function changeHandler(selectedItem) {
    setCheck(currentList => {
      if(currentList.length && currentList.some(cl => cl === selectedItem)) {
        return [...currentList].filter(li => li!=selectedItem)
      }
      else {
        return [...currentList,selectedItem]
      }
    });
    console.log(selectedItem + "Changed")
  }
  console.log('Loaded with'+check)
    return (
      <div>
        {items.map(
          (item,index) =>
            <div key={index}>
              <input onChange={() => changeHandler(item)} type="checkbox" value={item}/>
              <label className={check.some((l) => l === item)?"strikethrough":undefined}>{item}</label>
            </div>
          )}
      </div>
    );
  }

  export default JustList;