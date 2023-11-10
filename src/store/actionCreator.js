import { productSliceAction } from "./product";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ecommerce2-f99e7-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        productSliceAction.replaceItem({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {}
  };
};

export const sendCartData = (cartItem) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://ecommerce2-f99e7-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartItem.items,
            totalQuantity: cartItem.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
    } catch (error) {}
  };
};