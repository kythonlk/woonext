"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProductImageGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="grid gap-4">
        <Image
          alt="Main Product"
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          src="https://dev.zamaro.ae/wp-content/uploads/woocommerce-placeholder.png"
          height={600}
          width={600}
        />
      </div>
    );
  }
  const [selectedImage, setSelectedImage] = useState(images[0].src);

  const handleImageSelect = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="grid gap-4">
      <Image
        alt="Main Product"
        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        src={selectedImage}
        height={600}
        width={600}
      />
      <div className="hidden md:flex gap-4 items-start">
        {images.map((image, index) => (
          <button
            key={index}
            className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
            onClick={() => handleImageSelect(image.src)}
            aria-label={`View Image ${index + 1}`}
          >
            <Image
              alt={`Preview thumbnail ${index + 1}`}
              className="aspect-square object-cover"
              src={image.src}
              width={100}
              height={100}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
