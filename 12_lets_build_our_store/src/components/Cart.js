import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleEmptyClick = () => {
    dispatch(clearCart());
  };

  if (cartItems?.length == 0) {
    return (
      <div className="empty-cart-msg" style={{ marginTop: "6rem" }}>
        Please add some items!
      </div>
    );
  }

  return (
    <div className="cart">
      <div style={{ marginTop: "6rem" }} className="cart-name">
        Cart
      </div>
      <button className="filter-btn" onClick={handleEmptyClick}>
        Empty Cart
      </button>
      <div className="cart-items">
        {cartItems?.map((item) => {
          return <RestaurantMenuCard data={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
