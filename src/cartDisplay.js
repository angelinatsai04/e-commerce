import {React} from "react";
import Carousel from 'react-material-ui-carousel'
import ItemImageCarousel from "./itemImageCarousel.js";
  
function CartDisplay({ product, key }) {
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
            </div>
        </>
    );
}

export default CartDisplay;