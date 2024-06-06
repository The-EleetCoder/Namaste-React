import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  let { cuisines, name, cloudinaryImageId, avgRating, sla } = data?.info;
  let cuisine = cuisines.join(", ");

  if (cuisine.length > 32) {
    cuisine = `${cuisine.substring(0, 30)}...`;
  }
  if (name.length > 30) {
    name = `${name.substring(0, 25)}...`;
  }

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <div className="res-details">
        <p className="res-name">{name}</p>
        <div className="res-rating-time-div">
          <p className="res-avg-rating">{avgRating}</p>
          <p className="res-delivery-time">{sla.slaString}</p>
        </div>
        <p className="res-cuisine">{cuisine}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;