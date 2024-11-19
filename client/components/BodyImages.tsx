'use client';
import { useState, useEffect } from 'react';

type BodyImagesProps = {
  images: string[] | null; // Allow null in case images are not yet loaded
};

const defaultImages = [
  "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2", 
  "https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg?semt=ais_hybrid", 
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", 
  "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa", 
  "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2",
  "https://media.istockphoto.com/id/1213840216/photo/luxury-travel-romantic-couple-in-beach-hotel.jpg?s=612x612&w=0&k=20&c=1m4GfnUTJV4zZEDr_p1OYVQhmwM5F30MrbUhzYVacko="
]; // Initial images for the homepage

const BodyImages: React.FC<BodyImagesProps> = ({ images }) => {
  const [isViewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>(defaultImages); // Start with default images

  // Update currentImages when new images are passed via props
  useEffect(() => {
    if (images && images.length > 0) {
      setCurrentImages(images); // Override with dynamic images if available
    }
  }, [images]);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => setViewerOpen(false);

  const nextImage = () => setCurrentIndex((prev) => Math.min(prev + 1, currentImages.length - 1));
  const prevImage = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const displayedImages = currentImages.slice(0, 5);

  return (
    <div className="container mx-auto mt-5">
      {/* Gallery */}
      <div className="grid grid-cols-4 gap-4">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg cursor-pointer ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
            onClick={() => openViewer(index)}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
            {index === displayedImages.length - 1 && currentImages.length > 5 && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-2xl font-bold rounded-lg"
                onClick={() => openViewer(5)}
              >
                +{currentImages.length }
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Image Viewer */}
      {isViewerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-white max-w-3xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-red-500"
              onClick={closeViewer}
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <img
                src={currentImages[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="max-h-[70vh] w-auto object-contain"
              />
              <div className="flex justify-between items-center w-full mt-4">
                <button
                  className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                  onClick={prevImage}
                  disabled={currentIndex === 0}
                >
                  Previous
                </button>
                <div className="text-center">
                  <p className="font-bold">{`Image ${currentIndex + 1}`}</p>
                  <p>{currentIndex + 1} / {currentImages.length}</p>
                </div>
                <button
                  className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                  onClick={nextImage}
                  disabled={currentIndex === currentImages.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyImages;
