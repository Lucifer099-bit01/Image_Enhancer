import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-black min-h-screen w-full text-white p-2">
      <div className="text-center mb-8">
        <h1 className="text-5xl text-bold outline-text mb-5">AI Image Enhancer</h1>
        <p className="text-gray-400">Upload Your Image And Let AI Do It For You </p>
      </div>
      <Home />
     <div className="text-sm text-gray-500 mt-8">Powered by PicWish API </div>
    </div>
  );
};

export default App;
