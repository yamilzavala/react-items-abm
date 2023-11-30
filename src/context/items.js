import { createContext, useState } from 'react';
import axios from 'axios';

const ItemsContext = createContext();

function Provider({ children }) {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:3001/items');

    setItems(response.data);
  };

  const editItemById = async (id, description) => {
    const response = await axios.put(`http://localhost:3001/items/${id}`, {description});
    if(response?.data?.id) {
      const newItemsState = items.map(item => {
        if(item.id === id) {
            return {
                ...item,
                ...response.data
            }
        }
        return item
      })
      setItems(newItemsState)
    }
  };

  const deleteItemById = async (id) => {
    await axios.delete(`http://localhost:3001/items/${id}`);

    const updatedItems = items.filter((item) => {
      return item.id !== id;
    });

    setItems(updatedItems);
  };

  const createItem = async (description) => {
    const response = await axios.post('http://localhost:3001/items', {description});

    const updatedItems = [...items, response.data];
    setItems(updatedItems);
  };

  const valueToShare = {
    items,
    deleteItemById,
    editItemById,
    createItem,
    fetchItems,
  };

  return (
    <ItemsContext.Provider value={valueToShare}>
      {children}
    </ItemsContext.Provider>
  );
}

export { Provider };
export default ItemsContext;
