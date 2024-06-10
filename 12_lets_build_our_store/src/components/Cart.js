import React from "react";
import { useSelector } from "react-redux";
import RestaurantMenuCard from "./RestaurantMenuCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="cart">
      <div style={{ marginTop: "6rem" }} className="cart-name">Cart</div>
      <div className="cart-items">
        {cartItems?.map((item) => {
          return <RestaurantMenuCard data={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
