import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { ResourceStyles } from "./assets/styles/resource.styles";
import pdfImagae from "./assets/images/pdf.png";
import docImage from "./assets/images/doc.png";
import pngImage from "./assets/images/png.png";
import excelImage from "./assets/images/excel.png";
import folderUpload from "./assets/images/folderUpload.svg";

const files = [
  {
    id: "f8bf518c-9230-895a-afb36009020a",
    img: pdfImagae,
    fileName: "How install vs code",
    type: "pdf",
    date: "9/13/2020",
    size: "39MB",
    uploading: true
  },
  {
    id: "f8bf518c-9285-4330-8936009020a",
    img: docImage,
    fileName: "How to read a book",
    type: "doc",
    date: "9/13/2020",
    size: "10MB",
    uploading: false
  },
  {
    id: "f8c-9285-4330-895a-afb36009020a",
    img: excelImage,
    fileName: "How install vs code",
    type: "excel",
    date: "9/13/2020",
    size: "52MB",
    uploading: false
  },
  {
    id: "f8c-9285-4330-895a-afbe444009020a",
    img: pngImage,
    fileName: "How install vs code",
    type: "png",
    date: "9/13/2020",
    size: "3MB",
    uploading: false
  },
  {
    id: "f8bf518c-9230-895a-afb36009020a",
    img: pdfImagae,
    fileName: "How install vs code",
    type: "pdf",
    date: "9/13/2020",
    size: "39MB",
    uploading: false
  },
  {
    id: "f8bf518c-9285-4330-8936009020a",
    img: docImage,
    fileName: "How to read a book",
    type: "doc",
    date: "9/13/2020",
    size: "10MB",
    uploading: true
  },
  {
    id: "f8bf518c-9285-4330-8936009020a",
    img: docImage,
    fileName: "How to read a book",
    type: "doc",
    date: "9/13/2020",
    size: "10MB",
    uploading: true
  },
  {
    id: "f8bf518c-9285-4330-8936009020a",
    img: docImage,
    fileName: "How to read a book",
    type: "doc",
    date: "9/13/2020",
    size: "10MB",
    uploading: true
  },
  {
    id: "f8bf518c-9285-4330-8936009020a",
    img: docImage,
    fileName: "How to read a book",
    type: "doc",
    date: "9/13/2020",
    size: "10MB",
    uploading: true
  },
  {
    id: "f8bf518c-9285-4330-8936009020a",
    img: docImage,
    fileName: "How to read a book",
    type: "doc",
    date: "9/13/2020",
    size: "10MB",
    uploading: true
  },
  {
    id: "f8bf518c-9285-4330-8936009020a",
    img: docImage,
    fileName: "How to read a book",
    type: "doc",
    date: "9/13/2020",
    size: "10MB",
    uploading: true
  }
];

class Resource extends Component {
  //   static propTypes = {
  //     files: PropTypes.array.isRequired,
  //   };

  state = {
    hovered: {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,

    }
  }

  onHover = (index) => {
    const hovered = this.state.hovered[index]
    const changedHovered = this.state.hovered
    changedHovered[index] = !hovered
    this.setState({
      hovered: changedHovered
    })
  }

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
        <button>upload</button>
        {files &&
          files.map((file, index) => {
            return this.renderFile(file, index)
          })}
      </Fragment>
    );
  }

  renderFile = (file, index) => {
    return (
      <ResourceStyles.Container key={index}>
        <ResourceStyles.File>
          <ResourceStyles.Image src={file.img} alt={file.type} />
          {this.FileNameDetails(file)}
        </ResourceStyles.File>
        {file.uploading ? this.progressRing(index) : this.Actions()}
      </ResourceStyles.Container>
    )
  }

  progressRing = (index) => {
    const percentage = 66;
    return (
      <ResourceStyles.CircularProgressbarContainer onMouseEnter={() => this.onHover(index)} onMouseLeave={() => this.onHover(index)}>
        <CircularProgressbar
          value={percentage}
          text={this.state.hovered[index] ? "X" : `${percentage}%`}
          styles={buildStyles({
            textSize: '24',
            pathTransitionDuration: 0.5,
            pathColor: `#f5b351`,
            textColor: 'grey',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </ResourceStyles.CircularProgressbarContainer>
    );
  };
  Actions = () => {
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

  FileNameDetails = (file) => {
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
}





export default Resource;
