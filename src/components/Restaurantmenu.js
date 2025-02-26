import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurantmenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantmenu(resId);
  const [indexItem, setindexItem] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo[2].card.card.info;

  const itemCategory = resInfo[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className=" ">
      <div className="border-0 p-2 shadow-lg text-center justify-center text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
        <h1 className="">{name}</h1>
        <p className="text-gray-500 text-sm p-2 text-center ">
          {cuisines.join(",")}
        </p>
      </div>

      {itemCategory.map((item, index) => (
        <RestaurantCategory
          key={item.card.card.title}
          items={item?.card?.card}
          show={index === indexItem}
          setindexItem={() => setindexItem(index === indexItem ? null : index)}
        />
      ))}
    </div>
  );
};

export default Restaurantmenu;
