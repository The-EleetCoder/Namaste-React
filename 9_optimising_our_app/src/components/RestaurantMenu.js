import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuCard from "./RestaurantMenuCard";
import {
  RESTAURANT_MENU_API_URL,
  RESTAURANT_MENU_TYPE_KEY,
} from "../utils/constants";
import Shimmer from "./Shimmer";

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

  if (restaurantMenuList.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-menu-wrapper">
      <div className="restaurant-menu-top-div">
        <div className="restaurant-menu-name">{restaurantData?.name}</div>
        <div className="restaurant-menu-details">
          <div className="restaurant-menu-rating">
            <img
              className="restaurant-menu-rating-icon"
              src="https://img.icons8.com/?size=100&id=enP6M_u0BXV3&format=png&color=1D923D"
            />
            {`${restaurantData?.avgRating} (${restaurantData?.totalRatingsString})`}
          </div>
          <div className="restaurant-menu-cuisines">
            {restaurantData?.cuisines?.join(", ")}
          </div>
          <div className="restaurant-menu-time">
            {restaurantData?.sla?.slaString}
          </div>
          <hr className="restaurant-menu-line" />
          <div className="restaurant-menu-distance-fee">
            <img
              className="restaurant-menu-distance-fee-image"
              src="https://img.icons8.com/?size=100&id=GDiFk6WOVIf4&format=png&color=02060C99"
            />
            {`${restaurantData?.sla?.lastMileTravelString} | ₹${
              restaurantData?.feeDetails?.totalFee / 100
            } delivery fee will apply`}
          </div>
        </div>
      </div>

      <div className="restaurant-menu-bottom-div">
        {restaurantMenuList?.map((item, index) => {
          return <RestaurantMenuCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
