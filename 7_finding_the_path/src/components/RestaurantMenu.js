import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuCard from "./RestaurantMenuCard";
import {
  RESTAURANT_MENU_API_URL,
  RESTAURANT_MENU_TYPE_KEY,
} from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantMenuList, setRestaurantMenuList] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(RESTAURANT_MENU_API_URL + resId);
      const json = await data.json();

      setRestaurantMenuList(
        json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (card) =>
            card?.card?.card["@type"] == RESTAURANT_MENU_TYPE_KEY &&
            card?.card?.card?.title == "Recommended"
        )[0].card?.card?.itemCards
      );

      setRestaurantData(json?.data?.cards[2]?.card?.card?.info);
    } catch (error) {
      setRestaurantData(null);
      setRestaurantMenuList([]);
      console.log(error);
    }
  };

  return (
    <div className="restaurant-menu-wrapper">
      <div className="restaurant-menu-top-div">
        <div className="restaurant-menu-name">{restaurantData?.name}</div>
        <div className="restaurant-menu-details">
          <div className="restaurant-menu-rating">
            {`${restaurantData?.avgRating} (${restaurantData?.totalRatingsString})`}
          </div>
          <div className="restaurant-menu-cuisines">
            {restaurantData?.cuisines?.join(", ")}
          </div>
          <div className="restaurant-menu-time">
            {restaurantData?.sla?.slaString}
          </div>
          <div className="restaurant-menu-distance-fee">
            {`${restaurantData?.sla?.lastMileTravelString} | ₹${
              restaurantData?.feeDetails?.totalFee / 100
            } delivery fee will apply`}
          </div>
        </div>
      </div>

      <div className="restaurant-menu-bottom-div">
        {restaurantMenuList?.map((item) => {
          return (
            <RestaurantMenuCard
              key={item?.card?.info?.id}
              data={item?.card?.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
