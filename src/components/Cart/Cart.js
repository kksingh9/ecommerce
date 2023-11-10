import React from "react";
import CartItem from "./Carttem";
import { useSelector } from "react-redux";
import "./Cart.css";

function Cart() {
  const items = useSelector((state) => state.product.items);
  const quantity = useSelector((state) => state.product.totalQuantity);
  // const totalAmount = useSelector((state) => state.product.totalAmount);
  const totalAmount = items.reduce((prev,curr) => {
        return prev + curr.totalPrice;
  } ,0)
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="content">
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.name}
            quantity={item.quantity}
            total={item.totalPrice}
            image={item.image}
          />
        ))}
      </div>
      <div className="footer">
        <div className="action">
          <span>
            Total quantity <span> {quantity}</span>
          </span>
          <br></br>
          <span>
            Total Amount <span>${totalAmount.toFixed(2)}</span>
          </span>
        </div>
        <div className="btn">
          <button onClick={() => alert("Thankyou for Purchasing")}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;