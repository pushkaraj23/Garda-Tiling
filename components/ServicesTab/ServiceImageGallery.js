// components/ServiceImageGallery.jsx
"use client"

import { useState } from "react";
import Image from "next/image";

export default function ServiceImageGallery({ images, serviceName }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-[#3F3F46]">
        <Image
          src={images[selectedImage]}
          alt={`${serviceName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority={selectedImage === 0}
        />
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative h-24 rounded-lg overflow-hidden transition-all ${
              selectedImage === index 
              ? 'ring-2 ring-[#C9A24D]' 
              : 'opacity-75 hover:opacity-100'
            }`}
          >
            <Image
              src={img}
              alt={`${serviceName} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}