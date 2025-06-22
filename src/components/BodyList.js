import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOfflineStatus from "../utils/useOfflineStatus";
import Usercontext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [List, setList] = useState(0);
  const [filtered, setfiltered] = useState([]);
  const [searchData, setsearchData] = useState("");
  const status = useOfflineStatus();
  const RestaurantWithPromotedLabel = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setuserName } = useContext(Usercontext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4348045&lng=81.84565930000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const result = await response.json();

      const json = result?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes("restaurant_grid_listing")
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setList(json);
      setfiltered(json);
    } catch (err) {
      console.error("Failed to fetch using thingproxy:", err);
    }
  };


  if (status === false) {
    return <h1>You are offline! Check your internet connection.</h1>;
  }

  if (List === 0) {
    return <Shimmer />;
  }

  return (
    <div className="items-center justify-center">
      <div className="flex justify-between items-center m-5 shadow">
        <div className="gap-4 flex items-center justify-center p-5">
          <input
            className="border-2 w-[300px] border-gray-500 p-2 rounded "
            type="text"
            onChange={(event) => {
              setsearchData(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                const fiterresto = List.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchData.toLowerCase());
                });
                setfiltered(fiterresto);
              }
            }}
            value={searchData}
          />

          <button
            onClick={() => {
              const fiterresto = List.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              });
              setfiltered(fiterresto);
            }}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Search
          </button>
          <label className="py-2 font-bold">USER:</label>
          <input
            value={loggedInUser}
            onChange={(event) => {
              setuserName(event.target.value);
            }}
            className="border border-black font-semibold p-2 rounded"
            type="text"
          />
        </div>
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {
            const filterData = List.filter((res) => res.info.avgRating > 4);
            setfiltered(filterData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="bg-amber-50 flex flex-wrap gap-6 w-[100%] items-center justify-center px-[10%]">
        {filtered.map((item) => (
          <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
            {item?.info?.promoted ? (
              <RestaurantWithPromotedLabel items={item} />
            ) : (
              <RestaurantCard items={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
