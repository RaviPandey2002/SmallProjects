import Header from "./Header";
import SearchItem from "./SearchItem"
import Content from "./Content";
import Footer from "./Footer";
import AddNewItem from "./AddNewItem";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingItems")));

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('')

  const setAndSave = (newListItem) => {
    setItems(newListItem);
    localStorage.setItem("shoppingItems", JSON.stringify(newListItem));
  };

  const addNewItem = (itemName) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item: itemName };
    const newItemList = [...items, newItem];
    setAndSave(newItemList);
  };

  const handleClick = (id) => {
    const newItemList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSave(newItemList);
  };

  const handleDelete = (id) => {
    const newItemList = items.filter((item) => item.id !== id);
    setAndSave(newItemList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addNewItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocerie List" />
      <AddNewItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter( (item) => ((item.item).toLowerCase()).includes(search.toLowerCase() ))}
        handleClick={handleClick}
        handleDelete={handleDelete}

      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;

