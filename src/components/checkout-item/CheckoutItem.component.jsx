import "./CheckoutItem.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const addItem = () => addItemToCart(cartItem);
  const removeItem = () => removeItemFromCart(cartItem);
  const deleteItem = () => deleteItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
