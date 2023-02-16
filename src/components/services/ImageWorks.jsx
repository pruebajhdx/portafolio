import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const handleResize = (setIsHidden) => {
  setIsHidden(window.innerWidth < 810);
};

const CarouselImage = () => {
  const images = [
    { src: "img/upah.png", alt: "Imagen 1"},
    { src: "img/img-corousel/oesco1.png", alt: "Imagen 2"},
    { src: "img/img-corousel/dyno1.png", alt: "Imagen 3" },
    { src: "img/too.jpg", alt: "Imagen 4"  },
  ];

  return (
    <div className="carousel-container w-64 h-70 md:w-96 md:h-96 rounded-lg overflow-hidden">
      <Carousel showThumbs={false} showStatus={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-90 object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Images = () => {
  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/img/upah.png"
          alt=""
        />
      </div>
      <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/img/oesco.png"
          alt=""
        />
      </div>
      <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/img/dyno.png"
          alt=""
        />
      </div>
      <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/img/too.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
const ImageWorks = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize(setIsHidden));
    return () => {
      window.removeEventListener("rezise", handleResize(setIsHidden));
    };
  }, []);

  return (
    <div className="mt-16 sm:mt-20 flex justify-center">
      {isHidden ? <CarouselImage /> : <Images />}
    </div>
  );
};

export default ImageWorks;
