import { useState } from "react";

export default function ImageCarousel({ slides }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const pathImg = "src\\assets\\images\\me\\";

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      // (slides.length - 1) ความถูกต้องของการนับ
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const handlePrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[450px] overflow-hidden rounded-2xl shadow-xl group">
      {/* Container สำหรับภาพสไลด์ทั้งหมด */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            {/* รูปภาพ */}
            <img
              src={pathImg + slide.imgName}
              alt={slide.title || "carousel slide"}
              className="w-full h-full object-cover"
            />

            {(slide.title || slide.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12 text-white">
                {slide.title && (
                  <h3 className="text-xl font-bold mb-1">{slide.title}</h3>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ปุ่มควบคุมฝั่งซ้าย (Previous Arrow) */}
      <button
        onClick={handlePrevSlide}
        className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 backdrop-blur-sm"
      >
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* ปุ่มควบคุมฝั่งขวา (Next Arrow) */}
      <button
        onClick={handleNextSlide}
        className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 backdrop-blur-sm"
      >
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* ตัวบอกตำแหน่งภาพ (Dot Indicators) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
