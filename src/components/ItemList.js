import ItemShow from './ItemShow';
import useItemsContext from '../hooks/use-items-context';

function ItemList() {
  const { items } = useItemsContext();

  const renderedItems = items.map((item) => {
    return <ItemShow key={item.id} item={item} />;
  });

  return <div className="item-list">{renderedItems}</div>;
}

export default ItemList;
