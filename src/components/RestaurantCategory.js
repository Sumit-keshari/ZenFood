import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const RestaurantCategory = ({ items, show, setindexItem }) => {
  const [logo, setlogo] = useState("v");
  

  useEffect(() => {
    setlogo(show ? "^" : "v");
  }, [show]);

  const handleOnClick = () => {
    setindexItem();
    window.scrollTo({ top: 200, behavior: "smooth" });
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
      {show && (
        <div className="mt-2">
          
          <ItemList key={items.type} data={items.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
