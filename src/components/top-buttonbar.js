import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setName } from "../redux/file-slice";
import { downloadFile, runCode } from "../utility-functions";

const ActionButtonBar = () => {
  const file = useSelector((state) => state.file);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between p-4 pb-0 bg-[#333333]">
      <div>
        <input
          value={file.name}
          onChange={(event) => {
            dispatch(setName(event.target.value));
          }}
          placeholder="Enter File Name Here"
          className="w-full px-2 py-1 rounded-md text-gray-500 shadow-inner"
        />
      </div>
      <div className="flex">
        <div className="px-2 py-1 text-[#616161] bg-[#212121] shadow-2xl rounded-md m-2 ml-0 flex justify-center items-center">
          <i className="fa fa-database" />
          <span className="ml-2 mb-0.5">SQL</span>
        </div>

        <button
          type="button"
          onClick={() => {
            runCode(file.content, dispatch);
          }}
          className="px-2 py-1 text-white  bg-green-700 rounded-md m-2 ml-0 flex justify-center items-center"
        >
          <i className="fa fa-play text-white" />
          <span className="ml-2 mb-0.5 text-sm font-bold">Run Code</span>
        </button>
        <button
          type="button"
          onClick={() => {
            downloadFile(file);
          }}
          className="px-2 py-1 text-white  bg-blue-700 rounded-md m-2 ml-0 flex justify-center items-center"
        >
          <i className="fa fa-download text-white" />
          <span className="ml-2 mb-0.5 text-sm font-bold">Download File</span>
        </button>
      </div>
    </div>
  );
};

export default ActionButtonBar;
