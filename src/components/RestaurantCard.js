import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { items } = props;
  const { name, cuisines, cloudinaryImageId, costForTwo, avgRating, sla } =
    items.info;

  return (
    <div className="w-[200px] h-[300px] rounded p-2 m-2 shadow-xl ">
      <img
        className="w-full h-[50%] rounded object-cover"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="h-[50%] flex flex-col justify-between">
        <h3 className="text-md font-semibold truncate">{name}</h3>
        <p className="text-sm text-gray-500 break-words line-clamp-2">
          {cuisines.join(", ")}
        </p>
        <h3 className="text-sm font-semibold">{costForTwo}</h3>
        <h3 className="text-sm text-green-600 font-bold">{avgRating} ⭐</h3>
        <h3 className="text-sm text-gray-500">{sla.deliveryTime} min</h3>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="">promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
