import React from 'react';

const Cancellation: React.FC = () => {
  return (
    <div className="cancellation-section grid gap-6">
      <h2 className="text-2xl font-semibold">Cancellation</h2>
      <div>
        <div className="timeline relative h-1 bg-gray-300 my-4">
          <div className="timeline-point absolute left-0 top-1/2 w-3 h-3 bg-white border-2 border-black rounded-full transform -translate-y-1/2"></div>
          <div className="timeline-point absolute left-1/2 top-1/2 w-3 h-3 bg-white border-2 border-black rounded-full transform -translate-y-1/2"></div>
          <div className="timeline-point absolute right-0 top-1/2 w-3 h-3 bg-white border-2 border-black rounded-full transform -translate-y-1/2"></div>
        </div>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="font-semibold">Before Nov 4</div>
            <div>
              <h3 className="font-bold">Full refund</h3>
              <p className="text-gray-500 text-sm">Cancel your reservation before Nov 4 at 11:59 PM for a full refund.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="font-semibold">After Nov 4</div>
            <div>
              <h3 className="font-bold">No refund</h3>
              <p className="text-gray-500 text-sm">After that, you won’t get a refund.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancellation;
