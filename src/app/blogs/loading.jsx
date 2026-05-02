import React from 'react'

const Loading = () => {
  return (
    <div  className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
