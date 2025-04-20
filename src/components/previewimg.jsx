import React from "react";
import Loading from "./loading";


const previewimg = (props) => {
  return (
    <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <div className="bg-white shadow-lg overflow-hidden rounded-xl h-95">
        <h2 className="text-xl text-center bg-gray-900 text-white py-2 font-semibold">
          Original image
        </h2>
        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="bg-gray-200 h-full flex items-center justify-center text-black">
            No image here
          </div>
        )}
      </div>
      <div className="bg-white shadow-lg overflow-hidden rounded-xl h-95">
        <h2 className="text-xl text-center  bg-gray-900 text-white py-2 font-semibold">
          Enhanced Image
        </h2>
        {props.enhanced && !props.loading && (
          <img src={props.enhanced} alt="" className="w-full h-full object-cover" />
        )}
        {props.loading ? (
          <Loading />
        ) : (
          <div className="bg-gray-200 h-full flex items-center justify-center text-black">
            No Enhanced image 
          </div>
        )}
      </div>
    </div>
  );
};

export default previewimg;
