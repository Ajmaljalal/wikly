import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-router-dom';

class orgMembers extends Component {


  render() {
    return (
      <div>

      </div>
    )
  }

  static propTypes = {
    prop: PropTypes
  }
}

const mapStateToProps = ({ profileState, orgsState, projectsState }) => {
  return {
    profile: profileState?.profile,
    currentOrg: orgsState.current_org,
    projects: projectsState.projects,
    currentProject: projectsState.current_project
  }
}

const mapDispatchToProps = (disptach, ownProps) => {
  return {
    // signOut: () => disptach(signOut()),
    // setCurrentOrg: (orgId) => disptach(setCurrentOrg(orgId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(orgMembers);
