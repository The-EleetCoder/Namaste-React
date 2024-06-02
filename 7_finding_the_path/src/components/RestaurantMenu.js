import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantMenudata, setRestaurantMenudata] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId="+resId
    );
    const json = await data.json();
    setRestaurantMenudata(json.data);
  };

  return (
    <div className="menu" style={{ marginTop: "5em" }}>
      <h1>{restaurantMenudata?.cards[2]?.card?.card?.info?.name}</h1>
    </div>
  );
};

export default RestaurantMenu;
