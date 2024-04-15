import "./Carousel.css"
import image1 from "./images/look1.png"

export default function Carousel () {

    return (
        <div className="carousel ">
            <img
                src={image1}
                class="img-fluid rounded"
                alt="male model on a beach"
            />
            
        </div>
    )
}