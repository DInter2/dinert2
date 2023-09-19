'use client'
import React, { useState, Children, ReactNode } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'



interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(0);
 const childList = Children.toArray(children).filter((eleme)=> (
    eleme as React.ReactElement<any, string | React.JSXElementConstructor<any>>).type === "img"
    )
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % childList.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? childList.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="flex items-center justify-center h-[50vh] w-full overflow-hidden">
      <div className="relative w-full h-[50vh] items-center flex">
        {childList.map((child, index) =>
            React.cloneElement(child as React.ReactElement, {
              className: `shadow-lg ${
                index === currentImage ? 'block' : 'hidden'
              }
              mx-auto rounded-sm max-w-full max-h-full my-4 object-contain
              `,
            })
          )}
        <div className="absolute inset-0 flex items-center justify-between">
        <button
            onClick={prevImage}
            className="p-4 bg-gray-800 text-white rounded-full opacity-60 hover:opacity-100 focus:outline-none transition-opacity"
          >
            <SlArrowLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="p-4 bg-gray-800 text-white rounded-full opacity-60 hover:opacity-100 focus:outline-none transition-opacity"
          >
            <SlArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
