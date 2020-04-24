import React, { PureComponent } from 'react'
import File from './File'
import arrowDownIcon from '../../assets/icons/caret-down.svg'
import folderIcon from './assets/folder.svg'
import {
  FolderContainer,
  Header,
  HeaderRightSection,
  HeaderLeftSection,
  ArrowDown,
  FolderIcon,
  FolderName,
  FileDate,
  FileSize,
  Download,
  FolderBody,
} from './folder.style'

class Folder extends PureComponent {
  state = {
    openFolder: false
  }

  toggleFolderOpenClose = () => {
    this.setState({
      openFolder: !this.state.openFolder
    })
  }
  render() {
    return (
      <FolderContainer>
        {this.renderHeader()}
        {this.state.openFolder ? this.renderBody(): null}
      </FolderContainer>
    )
  }

  renderHeader = () => {
    return (
      <Header onClick={this.toggleFolderOpenClose}>
        <HeaderLeftSection>
          <ArrowDown isOpen={this.state.openFolder}>
            <img src={arrowDownIcon} alt='arrow-down' />
          </ArrowDown>
          <FolderIcon>
            <img src={folderIcon} alt='folder-icon' />
          </FolderIcon>
          <FolderName>
            {`HR proccesses (${3})`}
          </FolderName>
        </HeaderLeftSection>
        <HeaderRightSection>
          <FileDate>Date</FileDate>
          <FileSize>Size</FileSize>
          <Download>Download all (.zip)</Download>
        </HeaderRightSection>
      </Header>
    )
  }

  renderBody = () => {
    return (
      <FolderBody>
        <File fileType='word'></File>
        <File fileType='pdf'></File>
        <File fileType='word'></File>
        <File fileType='pdf'></File>
        <File fileType='pdf'></File>
      </FolderBody>
    )
  }
}

export default Folder;
