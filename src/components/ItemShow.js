import { useState } from 'react';
import ItemEdit from './ItemEdit';
import useItemsContext from '../hooks/use-items-context';

function ItemShow({ item }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteItemById } = useItemsContext();

  const handleDeleteClick = () => {
    deleteItemById(item.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{item.description}</h3>;
  if (showEdit) {
    content = <ItemEdit onSubmit={handleSubmit} item={item} />;
  }

  return (
    <div className="item-show">
      <img alt="items" src={`https://picsum.photos/seed/${item.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemShow;
