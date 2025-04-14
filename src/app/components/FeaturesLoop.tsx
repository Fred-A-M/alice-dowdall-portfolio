"use client";

import Slider from "react-slick";
import { features } from '../consts';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturesLoop() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    variableWidth: false, // Ensure fixed width slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="-mx-5 sm:-mx-10 w-screen relative">
      <div className="px-5 sm:px-10 font-bold sm:text-2xl text-lg mb-3">
        Work featured in...
      </div>

      <div className="w-full">
        <Slider {...settings}>
          {features.map((src, index) => (
            <div key={index} className="h-[80px] flex items-center justify-center box-border">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={src}
                  alt={`featured-logo-${index}`}
                  width={150}
                  height={80}
                  className="object-contain max-h-[80px] max-w-[150px] w-auto h-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}