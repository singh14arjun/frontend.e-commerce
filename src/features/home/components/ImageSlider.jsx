import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Container from "../../../components/common/Container.jsx"
import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";

export default function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderImages = [
        {
            image: image1,
            subHeading: "Ultra Speed Tech",
            heading: "NEXT-GEN COMPUTING",
            desp: "Intel Core Ultra & M-Series Laptops with Extra Exchange Bonus",
            button: "Explore Laptops",
        },
        {
            image: image2,
            subHeading: "Apex Mega Savings Festival",
            heading: "UP TO 80% OFF",
            desp: "Flagship Mobiles, 4K Smart TVs & Audio Systems",
            button: "Explore",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === sliderImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? sliderImages.length - 1 : prev - 1
        );
    };

    const slide = sliderImages[currentSlide];

    return (
        <div className="relative w-full overflow-hidden rounded-lg my-10">

            <div className="bg-gradient-to-r from-primary to-primary-light">
                <Container >

                    <div
                        key={currentSlide}
                        className="flex flex-row-reverse justify-between animate-slide-in"
                    >                        <img
                            src={slide.image}
                            alt={slide.heading || slide.subHeading}
                            className="w-100 h-50 m-5 rounded-2xl"
                        />


                        <div className=" flex items-center">
                            <div className="px-6 sm:px-10 md:px-14 lg:px-20">

                                {slide.subHeading && (
                                    <p className="mb-2 text-sm font-medium text-text-primary sm:text-base bg-primary-light rounded-2xl px-2">
                                        {slide.subHeading}
                                    </p>
                                )}

                                {slide.heading && (
                                    <h2 className="mb-2 text-3xl font-bold text-text-light sm:text-3xl md:text-4xl">
                                        {slide.heading}
                                    </h2>
                                )}

                                {slide.desp && (
                                    <p className="mb-5 max-w-lg text-sm text-orange-800 sm:text-base font-semibold">
                                        {slide.desp}
                                    </p>
                                )}

                                {slide.button && (
                                    <button className="rounded-md bg-text-light px-5 py-2 text-sm font-semibold text-text-primary transition hover:bg-primary-light cursor-pointer">
                                        {slide.button}
                                    </button>
                                )}

                            </div>
                        </div>
                    </div>



                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-text-primary shadow-md transition hover:bg-primary cursor-pointer"
                    >
                        <BiChevronLeft size={25} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-text-primary shadow-md transition hover:bg-primary cursor-pointer"
                    >
                        <BiChevronRight size={25} />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                        {sliderImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? "w-6 bg-text-primary"
                                    : "w-2 bg-text-primary/60"
                                    }`}
                            />
                        ))}
                    </div>
                </Container>

            </div>
        </div>
    );
}