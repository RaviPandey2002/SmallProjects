import Header from "./Header";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import AddNewItem from "./AddNewItem";
import { useEffect, useState } from "react";
import apiRequest from "./apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected Data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const addNewItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item: item };
    const newItemList = [...items, newItem];
    setItems(newItemList);

    const postOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const newItemList = items.filter((item) => item.id !== id);
    setItems(newItemList)

    const deleteOptions = { method: "DELETE" };
    const reqURL = `${API_URL}/${id}`;
    const response = await apiRequest(reqURL, deleteOptions);


    if (response) setFetchError(response);
  };

  const handleCheck = async (id) => {
    const newItemList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    const myItem = newItemList.filter((item) => item.id === id);
    setItems(newItemList);
    
    const updateOptions = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqURL = `${API_URL}/${id}`;
    const response = await apiRequest(reqURL, updateOptions);
    if (response) setFetchError(response);
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
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading...</p>}
        {fetchError && <p style={{ color: "red" }}>{`${fetchError}`} </p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
