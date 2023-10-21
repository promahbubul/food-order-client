import React from "react";

const PrimaryButton = ({ text, icon }) => {
  return (
    <div>
      <button className="py-2 mt-6 text-white font-normal text-md font-inter flex flex-row items-center gap-2 leading-md px-3 bg-primary-2 rounded-sm">
        <span className="text-lg">{icon}</span>
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
