import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resObj.restaurants);

  const handleFilter = () => {
    let filteredList = restaurantList.filter((res) => res?.info.avgRating > 4);

    setRestaurantList(filteredList);
  };

  return (
    <div className="body">
      <div className="body-top">
        <div className="search">Search</div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} data={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
