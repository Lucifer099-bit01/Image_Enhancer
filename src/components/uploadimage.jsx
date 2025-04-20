import React from "react";

const uploadimage = (props) => {

  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if(file)  props.uploadImageHandler(file);
   
  }
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileinput"
        className="border-dashed border-gray-300 rounded-md border-2 text-center p-6 block w-full cursor-pointer hover:border-blue-500 transition-all"
      >
        <input type="file" id="fileinput" className="hidden" onChange={showImageHandler} />
        <p className="text-black font-medium text-lg">Click to Drag  Your File here</p>
      </label>
    </div>
  );
};

export default uploadimage;
