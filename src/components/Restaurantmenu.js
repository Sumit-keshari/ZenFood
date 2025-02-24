import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantmenu from "../utils/useRestaurantmenu";

const Restaurantmenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantmenu(resId);
  // console.log(resInfo);

  debugger;
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, sla } = resInfo[2].card.card.info;

  const { itemCards } =
    resInfo[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {sla.deliveryTime} mins
      </p>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item.card.info.name} ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Restaurantmenu;
