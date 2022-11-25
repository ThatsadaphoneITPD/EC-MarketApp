import React from "react";

export default function PopUp() {
  return (
    <div className="boxPOP">
      <div classNam="box">
        <a className="button" href="#popup1">
          Let me Pop up
        </a>
      </div>

      <div id="popup1" className="overlay">
        <div className="popup">
          <h2>Here i am</h2>
          <a className="close" href="#">
            ×
          </a>
          <div className="content">
            Thanks for pop me out of that button, but now i'm done so you can
            close this window.
          </div>
        </div>
      </div>
    </div>
  );
}
