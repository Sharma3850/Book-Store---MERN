import React from "react";
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./cards";

function Freebook() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const filteredData = list.filter((data) => data.price === 0)
    // console.log(filteredData)

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <h1 className="font-semibold text-xl pb-2">Free offered books</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, quae. Ipsa, porro laudantium, rem culpa dolore autem voluptate nihil eveniet magni aliquam, quod in sapiente.</p>


                <div>
                    <Slider {...settings}>
                        {filteredData.map((item) => (
                            <Cards item={item} key={item.id}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook;