import React from 'react';
import { Carousel } from 'flowbite-react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import "../"
// import '../css/slider.css';

const images = [
  {
    id: 1,
    src: 'https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg',
    alt: '...',
  },
  {
    id: 2,
    src: 'https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg',
    alt: '...',
  },
  {
    id: 3,
    src: 'https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg',
    alt: '...',
  },
  {
    id: 4,
    src: 'https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg',
    alt: '...',
  },
  {
    id: 5,
    src: 'https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg',
    alt: '...',
  },
];

export default function Topslider() {
  return (
    <>
      <div className="h-[auto] sm:h-64 xl:h-[42rem] 2xl:h-[42rem]  rounded-lg w-[70%] mx-auto m-auto">
        <Carousel 
          className="my-carousel"
          leftControl={<FaChevronLeft />}
          rightControl={<FaChevronRight />}
        >
          {images.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} className='realtive h-[80%] w-[auto]'   style={{ objectFit: 'contain' }} />
          ))}
        </Carousel>
      </div>
    </>
  );
}
