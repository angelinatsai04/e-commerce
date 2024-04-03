import { React} from "react";
import Carousel from 'react-material-ui-carousel'
import BuyButton from "./buyButton.js";
import ItemImageCarousel from "./itemImageCarousel.js";
  
function ItemDisplay({ product, setCartItems, cartQuantity, setCartQuantity }) {
    return (
        <div>
            <Carousel>
            {!product 
            ? <p> loading </p>
            : product.images.map((image) => <ItemImageCarousel image={image} />)
            }
            </Carousel>
            <p>
                {product.title} - ${product.price}
            </p>
            <BuyButton item={product} setCartItems={setCartItems} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}  />
        </div>
    );
}

export default ItemDisplay;