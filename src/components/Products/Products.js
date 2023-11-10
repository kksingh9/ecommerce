import React, { useEffect } from "react";
import ProductOnScreen from "./ProductOnScreen";
import axios from "axios";
import "./ProductOnScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { productSliceAction } from "../../store/product";

function Products() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        dispatch(productSliceAction.addProduct(res.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [dispatch]);
  console.log(product);
  return (
    <div className="product">
      {product.map((item) => (
        <ProductOnScreen
          id={item.id}
          category={item.category}
          description={item.description}
          key={item.id}
          image={item.image}
          price={item.price}
          rating={item.rating}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default Products;