import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./assets/styles/Resource.modules.css";

import { ResourceStyles } from "./assets/styles/resource.styles";
import pdfImagae from "./assets/images/pdf.png";
import docImage from "./assets/images/doc.png";
import pngImage from "./assets/images/png.png";
import excelImage from "./assets/images/excel.png";
import folderUpload from "./assets/images/folderUpload.svg";
import Pause from "./assets/images/pause.svg";

const files = [
  {
    id: "f8bf518c-9230-895a-afb36009020a",
    img: pdfImagae,
    fileName: "How install vs code",
    type: "pdf",
    date: "9/13/2020",
    size: "39MB",
  },
  {
    id: "f8bf518c-9285-4330-8936009020a",
    img: docImage,
    fileName: "How to read a book",
    type: "doc",
    date: "9/13/2020",
    size: "10MB",
  },
  {
    id: "f8c-9285-4330-895a-afb36009020a",
    img: excelImage,
    fileName: "How install vs code",
    type: "excel",
    date: "9/13/2020",
    size: "52MB",
  },
  {
    id: "f8c-9285-4330-895a-afbe444009020a",
    img: pngImage,
    fileName: "How install vs code",
    type: "png",
    date: "9/13/2020",
    size: "3MB",
  },
  {
    id: "f8bf518c-9230-895a-afb36009020a",
    img: pdfImagae,
    fileName: "How install vs code",
    type: "pdf",
    date: "9/13/2020",
    size: "39MB",
  },
  {
    id: "f8bf518c-9285-4330-8936009020a",
    img: docImage,
    fileName: "How to read a book",
    type: "doc",
    date: "9/13/2020",
    size: "10MB",
  },
  {
    id: "f8c-9285-4330-895a-afb36009020a",
    img: excelImage,
    fileName: "How install vs code",
    type: "excel",
    date: "9/13/2020",
    size: "52MB",
  },
  {
    id: "f8c-9285-4330-895a-afbe444009020a",
    img: pngImage,
    fileName: "How install vs code",
    type: "png",
    date: "9/13/2020",
    size: "3MB",
  },
];

class Resource extends Component {
  //   static propTypes = {
  //     files: PropTypes.array.isRequired,
  //   };

  render() {
    if (!files || !files.length) {
      return (
        <ResourceStyles.NullContainer>
          <ResourceStyles.NullButtonContainer>
            <img src={folderUpload} alt="Upload Files" />
            <p>Click here to upload your file</p>
          </ResourceStyles.NullButtonContainer>
        </ResourceStyles.NullContainer>
      );
    }
    return (
      <Fragment>
        {progressRing()}
        {files &&
          files.map((file) => {
            return (
              <ResourceStyles.Container>
                <ResourceStyles.File>
                  <ResourceStyles.Image src={file.img} alt={file.type} />
                  {FileNameDetails(file)}
                </ResourceStyles.File>
                {Actions()}
              </ResourceStyles.Container>
            );
          })}
      </Fragment>
    );
  }
}

const Actions = () => {
  return (
    <ResourceStyles.Actions>
      <Tippy placement="bottom" content="Delete" className="tippy-tooltip">
        <span>
          <FontAwesomeIcon icon="trash-alt" color="red" size="lg" />
        </span>
      </Tippy>
      <Tippy placement="bottom" content="Download" className="tippy-tooltip">
        <span>
          <FontAwesomeIcon icon="download" color="grey" size="lg" />
        </span>
      </Tippy>
    </ResourceStyles.Actions>
  );
};

const FileNameDetails = (file) => {
  return (
    <ResourceStyles.FileNameDetails>
      <ResourceStyles.FileName>{file.fileName}</ResourceStyles.FileName>
      <ResourceStyles.FileDetails>
        <span>{file.date}</span>
        {file.size}
      </ResourceStyles.FileDetails>
    </ResourceStyles.FileNameDetails>
  );
};

const progressRing = () => {
  return (
    <ResourceStyles.Container>
      <ResourceStyles.File>
        <ResourceStyles.Image src={pdfImagae} alt="Upload Files" />
        <ResourceStyles.FileNameDetails>
          <ResourceStyles.FileName>How To Get A Turtle</ResourceStyles.FileName>
          <ResourceStyles.FileDetails>
            <span>9/14/2020</span>
            1.8MB / 5.3MB
          </ResourceStyles.FileDetails>
        </ResourceStyles.FileNameDetails>
      </ResourceStyles.File>
      <div class="box">
        <FontAwesomeIcon
          icon="times"
          color="grey"
          size="lg"
          style={{ cursor: "pointer" }}
        />
        <div
          class="percent"
          onMouseEnter={progressRingHover()}
          onMouseLeave={progressRingHover()}
        >
          <svg>
            <circle cx="30" cy="30" r="30"></circle>
            <circle cx="30" cy="30" r="30"></circle>
          </svg>
          <div class="number">
            <h2>
              67<span>%</span>
            </h2>
          </div>
        </div>
      </div>
    </ResourceStyles.Container>
  );
};

const progressRingHover = () => {
  return <img src={Pause} alt="Pause" />;
};

export default Resource;
