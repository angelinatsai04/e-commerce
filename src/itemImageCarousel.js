
function ItemImageCarousel({image}) {
    return(
        <div className="flex items-center justify-center p-1">
            <img
            alt="Image"
            className="aspect-video object-cover rounded-md"
            src={image}
            />
        </div>
    );
}

export default ItemImageCarousel;