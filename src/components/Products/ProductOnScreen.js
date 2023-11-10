import React from "react";
import "./ProductOnScreen.css";
import { useDispatch } from "react-redux";
import { productSliceAction } from "../../store/product";

function ProductOnScreen({ image, category, id, price }) {
  const dispatch = useDispatch();
  const onAddProduct = () => {
    dispatch(
      productSliceAction.addItem({
        id: id,
        price: price,
        title: category,
        image: image,
      })
    );
  };

  return (
    <div className="form-control">
      <div className="image">
        <img src={image} alt="img" width={100} height={100}></img>
      </div>
      <div className="category">
        <span>{category}</span>
        <span>${price}</span>
        <button onClick={onAddProduct}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductOnScreen;