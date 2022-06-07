import React from "react";

const style = {
  footerContainer:
    "text-xs w-full left-0 absolute h-[2.4vh] bg-[#007acc] text-white top-[97.6vh] flex justify-between",
  sideFooter: "flex justify-center items-start cursor-pointer",
  leftFooter: "text-xs ml-1 mt-[2px]",
  rightFooter: "mr-2 mt-[2px]",
  fileNameInput:
    "bg-transparent border-0 border-b-2 border-white select-none w-[80px] text-white",
};
const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.sideFooter}>
        <span className={style.leftFooter}>
          <i className="far fa-user" /> Anomymous
        </span>
        <span className={style.leftFooter}>
          <i className="fas fa-file-code" />{" "}
          <input
            className={style.fileNameInput}
            // onChange={handleNameChange}
            // value={fileName}
          />
        </span>
        <span
          className={style.leftFooter}
          // onClick={handleFileSave}
        >
          <i className="far fa-save" /> Save code
        </span>
        {/* <span className="footer_text l_footer change_lang">
          <i className="fas fa-code" /> Change Programming Language
        </span> */}
        {/* {closeLangOption ? (
          <div className="language-options">
            <button
              className="language-buttons"
            //   onClick={() => {
            //     dispatch(addFile(DSAFiles[0]));
            //   }}
            >
              C++
            </button>
            <button
              className="language-buttons"
              onClick={() => {
                dispatch(addFile(DSAFiles[1]));
              }}
            >
              Python
            </button>
            <button
              className="language-buttons"
              onClick={() => {
                dispatch(addFile(DSAFiles[3]));
              }}
            >
              Java
            </button>
          </div>
        ) : (
          ""
        )} */}
      </div>
      <div className={style.sideFooter}>
        <span
          className={style.sideFooter}
          //   onClick={handleShareFile}
        >
          Share
        </span>
        <span className={style.rightFooter}>Ln 0, Col 0</span>
        <span className={style.rightFooter}>Layout: US</span>
        <span className={style.rightFooter}>
          <i className="fas fa-terminal" /> SQL
        </span>
        <span className={style.rightFooter}>CRLF</span>
        <span className={style.rightFooter}>UTF-8</span>
      </div>
    </footer>
  );
};

export default Footer;
