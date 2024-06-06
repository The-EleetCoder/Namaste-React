import { useEffect, useState } from "react";
import {
  RESTAURANT_MENU_API_URL,
  RESTAURANT_MENU_TYPE_KEY,
} from "../utils/constants";

const useRestaurantData = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantMenuList, setRestaurantMenuList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_MENU_API_URL + resId);
      const json = await data.json();

      if (
        json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (card) =>
            card?.card?.card["@type"] == RESTAURANT_MENU_TYPE_KEY &&
            card?.card?.card?.title == "Recommended"
        ).length == 0
      ) {
        setRestaurantMenuList(
          json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.filter(
              (card) => card?.card?.card["@type"] == RESTAURANT_MENU_TYPE_KEY
            )
            .map((item) => item?.card?.card?.itemCards)
            .flat()
            .map((x) => x?.card?.info)
        );
      } else {
        setRestaurantMenuList(
          json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.filter(
              (card) =>
                card?.card?.card["@type"] == RESTAURANT_MENU_TYPE_KEY &&
                card?.card?.card?.title == "Recommended"
            )[0]
            ?.card?.card?.itemCards.map((x) => x?.card?.info)
        );
      }

      setRestaurantData(json?.data?.cards[2]?.card?.card?.info);
    } catch (error) {
      setRestaurantData(null);
      setRestaurantMenuList([]);
      console.log(error);
    }
  };

  return [restaurantData, restaurantMenuList];
};

export default useRestaurantData;
