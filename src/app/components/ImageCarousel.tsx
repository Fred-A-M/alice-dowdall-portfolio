import Image from "next/image";
import Slider from "react-slick";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="w-full justify-center items-center">
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`Image ${index}`} width={800} height={800} />
        </div>
      ))}
    </Slider>
  );
}
