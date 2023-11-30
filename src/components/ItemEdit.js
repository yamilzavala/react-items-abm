import { useState } from 'react';
import useItemsContext from '../hooks/use-items-context';

function ItemEdit({ item, onSubmit }) {
  const [description, setDescription] = useState(item.description);
  const { editItemById } = useItemsContext();

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editItemById(item.id, description);
  };

  return (
    <form onSubmit={handleSubmit} className="item-edit">
      <label>Description</label>
      <input className="input" value={description} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default ItemEdit;
