import { React, useEffect, useState } from "react";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "src/components/ui/carousel"
import BuyButton from "./buyButton.js";
import ItemImageCarousel from "./itemImageCarousel.js";

function ItemDisplay({product, cart, setCart}) {
    return (
        <div>
            <Carousel>
            <CarouselContent>
            {!product 
            ? <p> loading </p>
            : product.images.map((image) => <ItemImageCarousel image={image} />)
            }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
            <p>
                {product.title}
            </p>
            <p>
                ${product.price}
            </p>
            <BuyButton item={product.title} cartQuantity={cart} setCartQuantity={setCart} />
        </div>
    );
}

export default ItemDisplay;