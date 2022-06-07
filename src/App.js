import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ToastContainer } from "react-toastify";

import Footer from "./components/footer";
import IDE from "./components/ide";
import ActionButtonBar from "./components/top-buttonbar";

const App = () => {
  return (
    <div className="bg-[#1e1e1e]">
      <ToastContainer
        autoClose={5000}
        theme="dark"
        position="top-right"
        closeOnClickrtl
      />
      <ActionButtonBar />
      <IDE />
      <div />
      <Footer />
    </div>
  );
};

export default App;
