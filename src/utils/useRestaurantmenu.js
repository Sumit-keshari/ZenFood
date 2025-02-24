import { useEffect, useState } from "react";
import { RESTOMENU } from "./constants";

const useRestaurantmenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(RESTOMENU + resId);
    const response = await data.json();
    const json = response.data.cards;
    setresInfo(json);
  };

  return resInfo;
};
export default useRestaurantmenu;
