import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const [restaurantMenudata, setRestaurantMenudata] = useState(null);

  const { resId } = useParams();

  const recMenuList =
    restaurantMenudata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
        card?.card?.card?.title == "Recommended"
    )[0].card?.card?.itemCards;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" +
        resId
    );
    const json = await data.json();
    setRestaurantMenudata(json.data);
  };

  return (
    <div className="menu" style={{ marginTop: "5em" }}>
      <h1>{restaurantMenudata?.cards[2]?.card?.card?.info?.name}</h1>
      <h2>Recommended</h2>
      {recMenuList?.map((item) => {
        return <RestaurantMenuCard key={item?.card?.info?.id} data={item?.card?.info} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
