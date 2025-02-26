import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ items, show, setindexItem }) => {
  const [logo, setlogo] = useState("v");
  const handleOnClick = () => {
    setindexItem();
    setlogo(show ? "v" : "^");
  };

  return (
    <div className="m-auto my-4 bg-gray-200 shadow-lg w-[60%]">
      <div
        className="flex justify-between p-3 text-bold font-semibold text-gray-900 cursor-pointer"
        onClick={handleOnClick}
      >
        <span className="font-bold text-gray-950 text-lg">
          {items.title} ({items.itemCards.length})
        </span>
        <span className="animate-bounce">{logo}</span>
      </div>
      {show && <ItemList key={items.type} data={items.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
