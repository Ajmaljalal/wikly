import React, { PureComponent } from 'react'
import wordIcon from './assets/word.svg'
import pdfIcon from './assets/pdf.svg'
import downloadIcon from './assets/download.svg'
import {
  Row,
  RowRightSection,
  RowLeftSection,
  FileIcon,
  FileName,
  FileDate,
  FileSize,
  Download
} from './file.style'

class File extends PureComponent {

  getIcon = () => {
    const { fileType } = this.props
    if (fileType === 'word') {
      return wordIcon;
    }
    if (fileType === 'pdf') {
      return pdfIcon;
    }

  }
  render() {
    return (
      <Row>
        <RowLeftSection>
          <FileIcon>
            <img src={this.getIcon()} alt='File-icon' />
          </FileIcon>
          <FileName>
            Hiring processes.docx
          </FileName>
        </RowLeftSection>
        <RowRightSection>
          <FileDate>04/24/2020</FileDate>
          <FileSize>26kb</FileSize>
          <Download>
            <img src={downloadIcon} alt='download-icon' />
          </Download>
        </RowRightSection>
      </Row>
    )
  }
}

export default File;