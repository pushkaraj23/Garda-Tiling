"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceImageGallery({ images, serviceName }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-surface-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={images[selectedImage]}
              alt={`${serviceName} - Image ${selectedImage + 1}`}
              fill
              className="object-cover"
              priority={selectedImage === 0}
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${
              selectedImage === index
                ? "ring-2 ring-accent border-2 border-accent animate-border-glow"
                : "opacity-70 hover:opacity-100 border-2 border-border hover:border-accent/50"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Image
              src={img}
              alt={`${serviceName} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="25vw"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
