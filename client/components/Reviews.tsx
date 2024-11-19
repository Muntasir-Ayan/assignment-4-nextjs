import React from 'react';
import "@/app/css/all.css";
const Reviews: React.FC = () => {
  return (
    <div className="grid grid-cols-2 container mx-auto reviews-section">
      <div>
      <div className="rating-header flex items-baseline gap-3">
        <span className="text-green-500 text-4xl font-semibold">9.8/10</span>
        <span className="text-2xl font-medium">Exceptional</span>
      </div>
      <div className="reviews-count text-gray-500 flex items-center gap-2">
        <span>24 reviews</span>
        <span>ℹ️</span>
      </div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, autem.</div>
      </div>
      
      <div>
      
      <div className="reviews-slider flex overflow-x-auto gap-6 pb-5 snap-x">
        <div className="review-card min-w-[300px] p-6 border rounded-lg snap-start">
          <div className="font-bold">10/10 Excellent</div>
          <p className="mt-2">A very cozy home for the two of us in a quiet area NW of town. Beautiful water view...</p>
          <p className="mt-3 text-sm font-medium">Kyle G.</p>
          <p className="text-sm text-gray-500">Sep 25, 2024</p>
        </div>
        <div className="review-card min-w-[300px] p-6 border rounded-lg snap-start">
          <div className="font-bold">10/10 Excellent</div>
          <p className="mt-2">The cottage was just as the pictures and description stated. Nice quiet area and great...</p>
          <p className="mt-3 text-sm font-medium">Cindy B.</p>
          <p className="text-sm text-gray-500">Sep 23, 2024</p>
        </div>
      </div>
      <div>
        <a href="#" className="see-all-btn inline-flex items-center gap-2 px-4 py-2 text-blue-600 border border-gray-300 rounded-lg">
          See all 24 reviews <span>→</span>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Reviews;
