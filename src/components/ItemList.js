import { useState } from "react";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = (items) => {
  const [showPopup, setShowPopup] = useState();

  const { data } = items;
  const dispatch = useDispatch();
  const handleAddtoCart = (item) => {
    dispatch(addItem(item));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  return (
    <>
      {data.map((item) => (
        <div className="m-2 p-2 shadow" key={item.card.info.id}>
          <div className="flex justify-between">
            <div>
              <div>{item.card.info.name}</div>
              <div>
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </div>
            </div>
            <div>
              <img
                className="w-[150px] h-[100px] rounded object-cover"
                src={CDN_URL + item.card.info.imageId}
                alt="Error"
              />
              <div className="mt-2 mx-10 rounded-2xl bg-white">
                <button
                  className="cursor-pointer w-[65px] text-green-500 font-bold"
                  onClick={() => handleAddtoCart(item)}
                >
                  Add+
                </button>
                {showPopup && (
                  <div className="fixed bottom-0 left-0 w-full bg-green-500 text-white text-center p-2">
                    Added in cart
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-3 text-gray-600">
            <div>{item.card.info.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
