import React from "react";
import "./CartItem.css";
import { productSliceAction } from "../../store/product";
import { useDispatch } from "react-redux";

function CartItem({ title, total, price, quantity, id, image }) {
  const dispatch = useDispatch();
  const decreaseItemHandler = () => {
    dispatch(
      productSliceAction.addItem({
        id,
        price,
        title,
        quantity,
        image,
      })
    );
  };
  const increaseItemHandler = () => {
    dispatch(productSliceAction.removeItem(id));
  };
  return (
    <>
      <li className="item">
        <header>
          <img src={image} alt="img" width={51} height={51}></img>
          <h3>{title}</h3>
          <div className="price">
            ${total.toFixed(2)}{" "}
            <span className="itemprice">(${price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className="details">
          <div className="quantity">
            x <span>{quantity}</span>
          </div>
          <div className="actions">
            <button onClick={decreaseItemHandler}>+</button>
            <button onClick={increaseItemHandler}>-</button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CartItem;