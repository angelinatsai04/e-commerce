import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "src/components/ui/carousel"

function ItemImageCarousel({image}) {
    return(
        <CarouselItem>
        <div className="flex items-center justify-center p-1">
            <img
            alt="Image"
            className="aspect-video object-cover rounded-md"
            src={image}
            />
        </div>
        </CarouselItem>
    );
}

export default ItemImageCarousel;