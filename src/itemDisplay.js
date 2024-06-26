import { React} from "react";
import Carousel from 'react-material-ui-carousel'
import BuyButton from "./buyButton.js";
import ItemImageCarousel from "./itemImageCarousel.js";
  
function ItemDisplay({ product, cartItems, setCartItems, cartQuantity, setCartQuantity }) {
    return (
        <>
            <Carousel indicatorContainerProps={{ style: { marginLeft: "-35%" }}} 
                navButtonsWrapperProps={{ style: { visibility: "hidden" } }} >
            {!product 
            ? <p> loading </p>
            : product.images.map((image) => <ItemImageCarousel image={image} />)
            }
            </Carousel>
            <div style={{ marginBottom: "15px", marginLeft: "1%" }}>
                <span style={{ fontWeight: 'bold' }}>
                {product.title} - ${product.price}
                </span>
                <span style={{ marginLeft: "13%" }}>
                <BuyButton item={product} cartItems={cartItems} setCartItems={setCartItems} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}/>
                </span>
            </div>
        </>
    );
}

export default ItemDisplay;