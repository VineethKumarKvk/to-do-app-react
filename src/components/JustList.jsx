import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import './JustList.css';

const CHECKED_ITEMS_COOKIE = 'checkedItems';

function JustList({ items }) {
  const [check, setCheck] = useState(() => {
    const savedCheckedItems = Cookies.get(CHECKED_ITEMS_COOKIE);
    return savedCheckedItems ? JSON.parse(savedCheckedItems) : [];
  });

  useEffect(() => {
    Cookies.set(CHECKED_ITEMS_COOKIE, JSON.stringify(check), { expires: 1 });
  }, [check]);

  function changeHandler(selectedItem) {
    setCheck(currentList => {
      if (currentList.some(cl => cl === selectedItem)) {
        return currentList.filter(li => li !== selectedItem);
      } else {
        return [...currentList, selectedItem];
      }
    });
    console.log(selectedItem + " Changed");
  }

  console.log('Loaded with ' + check);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <input
            onChange={() => changeHandler(item)}
            type="checkbox"
            checked={check.includes(item)}
            value={item}
          />
          <label className={check.includes(item) ? "strikethrough" : undefined}>
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}

export default JustList;
