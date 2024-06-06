import React from "react";
import { RESTAURANT_MENU_CARD_IMAGE_URL } from "../utils/constants";

const RestaurantMenuCard = ({ data }) => {
  return (
    <div className="restaurant-menu-card">
      <div className="restaurant-menu-card-left">
        <img
          className="restaurant-menu-card-veg-nonveg"
          src={
            data?.isVeg
              ? "https://img.icons8.com/?size=100&id=61083&format=png&color=000000"
              : "https://img.icons8.com/?size=100&id=61082&format=png&color=000000"
          }
        />
        <div className="restaurant-menu-card-name">{data?.name}</div>
        <div className="restaurant-menu-card-price">
          ₹
          {data?.defaultPrice == null
            ? data?.price / 100
            : data?.defaultPrice / 100}{" "}
        </div>
        <div className="restaurant-menu-card-description">
          {data?.description?.length > 150
            ? `${data?.description?.substring(0, 150)}...`
            : data?.description}
        </div>
      </div>

      <div className="restaurant-menu-card-right">
        <img
          className="restaurant-menu-card-image"
          src={RESTAURANT_MENU_CARD_IMAGE_URL + data?.imageId}
          alt="image"
        />
        <button className="restaurant-menu-card-button">ADD</button>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
