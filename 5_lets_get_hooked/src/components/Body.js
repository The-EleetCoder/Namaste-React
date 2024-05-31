import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="body-top">
        <div className="search">Search</div>
        <button className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {resObj.restaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} data={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
