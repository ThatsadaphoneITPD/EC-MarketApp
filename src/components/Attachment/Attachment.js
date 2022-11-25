import React, { useState, useRef, useEffect } from "react";

import axios from "axios";
import { Icon } from "../components";
import { FaDownload } from "react-icons/fa";
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
const KILO_BYTES_PER_BYTE = 1000;
const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

export default function AttachmentCrub({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) {
  const pic =
    "https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300";
  const [files, setFiles] = useState({});
  const fileInputField = useRef(null);
  //   let file = files[fileName];
  //   let isImageFile = file.type.split("/")[0] === "image";

  return (
    <>
      <div className="Attachment__container ">
        <div className="form-container">
          <div className="question-container">
            <div
              className="row"
              style={{
                textAlign: "left",
              }}
            >
              <div className="col-0">
                <ProfilePoster pic={pic} />
              </div>
              <div
                className="col-3"
                style={{
                  paddingLeft: "15px",
                  fontSize: "15px",
                }}
              >
                <strong>Name Poster: </strong>
                <br />
                <h4>Post Title </h4>
              </div>
              <div className="col-2 ">
                <strong>
                  {" "}
                  Date
                  {/* {new Date(data.createdAt).toLocaleString("en-uk", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })} */}
                </strong>
              </div>
              <div className="col-0">
                <div style={{ marginTop: "20px" }}>
                  <Icon>
                    <FaDownload
                      size={35}
                      onMouseOver={({ target }) =>
                        (target.style.color = "#33EFAB")
                      }
                      onMouseOut={({ target }) =>
                        (target.style.color = "black")
                      }
                    />
                  </Icon>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 " style={{ textAlign: "center" }}>
                <div className="Attachment">
                  <p>Attachment flie</p>
                  <img className="Attachment__fileItem" src={pic} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ProfilePoster = ({ pic }) => {
  return (
    <label className="custom-file-upload fas">
      <div className="img-wrap">
        <img src={pic} />
      </div>
    </label>
  );
};
