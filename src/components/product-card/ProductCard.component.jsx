import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles";

// COMPONENTS
import Button from "../button/Button.component";
import { BUTTON_TYPE_CLASSES } from "../button/Button.component";

// CONTEXT
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  // CONTEXT
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
