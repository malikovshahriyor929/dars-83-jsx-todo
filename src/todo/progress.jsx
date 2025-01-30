import React from "react";

const Progress = ({ progress = 0 }) => {
  let progressRes = Math.round(progress);

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-end py-2 text-lg">progress</p>
        <p className="text-end py-2 text-lg">
          {progressRes ? progressRes : 0}%
        </p>
      </div>
      <div className="w-full h-3 bg-white rounded-lg">
        <div
          style={{ width: progressRes + "%" }}
          className=" transition-[0.7s]  h-3 rounded-lg "
        ></div>
      </div>
    </div>
  );
};

export default Progress;
