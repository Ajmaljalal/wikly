import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './../../components/input/Input';
import Button from "../../components/button/Button";
import { ResourceStyles } from './assets/styles/resource.styles';
import { Colors } from './../../assets/colors';
import Upload from "./assets/images/upload.svg";

class UploadAndSearch extends Component {

  render() {
    const { searchPhrase, onChange, btnText, searchPlaceholder } = this.props
    return (
      <ResourceStyles.SearchAndUploadContainer>
        <Input
          placeholder={searchPlaceholder}
          value={searchPhrase}
          onChange={onChange}
        />
        <ResourceStyles.Button>
          <Button
            color="white"
            bgColor={Colors["wikli-color-primary-dark"]}
            medium={true}
            width="auto"
            fontSize="14px"
          >
            <img
              src={Upload}
              alt=""
              style={{ width: "20px", paddingRight: "7px" }}
            />
            {btnText}
          </Button>
        </ResourceStyles.Button>
      </ResourceStyles.SearchAndUploadContainer>
    );


  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    searchPhrase: PropTypes.string.isRequired,
    btnText: PropTypes.string,
    searchPlaceholder: PropTypes.string
  }
}


export default UploadAndSearch
