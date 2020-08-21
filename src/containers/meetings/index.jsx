import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react';
import { setCurrentPorject } from '../../redux/projects/actions'
import { createMeeting, getMeetings } from '../../redux/meetings/actions'
import { getCurrentWeek, getLastWeek, getNextWeek } from '../../helpers/getDate'
import ScreenTitle from '../../components/screen-title/index'
import Button from '../../components/button/Button'
import { Colors } from '../../assets/colors'
import MeetingColumn from './MeetingColumn'
import CreateNewMeeting from './CreateNewMeeting'
import NullMeetings from './NullMeetings'

import {
  BodyContainer,
  Container,
  Header
} from '../../components/common.styles'
import {
  ColumnsContainer,
  Buttons,
  NextPreviousWeek,
  Previous,
  Next
} from './index.styles'

class Meetings extends PureComponent {
  state = {
    isAddMeetingModalOpen: false,
    weekDates: null,
    week: 'Current'
  }

  componentDidMount() {
    const { setCurrentPorject, currentProject, projects } = this.props
    if(!currentProject && projects) {
      setCurrentPorject(projects[0])
    }
    this.setState({
      weekDates: getCurrentWeek(),
    })
  }

  componentDidUpdate() {
    const { getMeetings, currentProject } = this.props
    if (!this.props.meetings && currentProject) {
      console.log('meetings did update')
      getMeetings(currentProject.projectId)
    }
  }

  setPreviousWeek = () => {
    const { week } = this.state
    if (week === 'Previous') return
    if (week === 'Next') {
      this.setState({
        weekDates: getCurrentWeek(),
        week: 'Current'
      })
    }
    if (week === 'Current')
      this.setState({
        weekDates: getLastWeek(),
        week: 'Previous'
      })
  }

  setNextWeek = () => {
    const { week } = this.state
    if (week === 'Next') return
    if (week === 'Previous') {
      this.setState({
        weekDates: getCurrentWeek(),
        week: 'Current'
      })
    }
    if (week === 'Current') {
      this.setState({
        weekDates: getNextWeek(),
        week: 'Next'
      })
    }
  }

  toggleAddMeetingModal = () => {
    this.setState({
      isAddMeetingModalOpen: !this.state.isAddMeetingModalOpen
    })
  }

  render() {
    const { isAddMeetingModalOpen } = this.state
    const { meetings } = this.props
    const isMeetingNull = !meetings || !meetings.length
    return (
      <BodyContainer>
        {this.renderHeader(isMeetingNull)}
        <Container>
          {!isMeetingNull ?
            (
              <ColumnsContainer>{this.renderColumns()}</ColumnsContainer>
            ) : <NullMeetings onClick={this.toggleAddMeetingModal} />
          }
        </Container>
        {isAddMeetingModalOpen ? <CreateNewMeeting toggleAddMeetingModal={this.toggleAddMeetingModal} /> : null}
      </BodyContainer>
    )
  }

  renderHeader = (isMeetingNull) => {
    if (!isMeetingNull) {
      return (
        <Header>
          <ScreenTitle title={'Meetings'} />
          {this.renderNextAndPreviousButton()}
          <Buttons>
            <Button
              color='white'
              bgColor={Colors["wikli-color-primary-dark"]}
              onClick={this.toggleAddMeetingModal}
            >
              <FontAwesomeIcon icon='plus' color='white' />
              <span>Add Meeting</span>
            </Button>
          </Buttons>
        </Header>
      )
    }
  }

  renderNextAndPreviousButton = () => {
    const { week } = this.state
    return (
      <NextPreviousWeek>
        <Tippy content='Previous week' className='tippy-tooltip' placement='bottom'>
          <Previous onClick={this.setPreviousWeek}><FontAwesomeIcon icon='angle-left' color='black' size='lg' /></Previous>
        </Tippy>
        {`${week} Week`}
        <Tippy content='Next week' className='tippy-tooltip' placement='bottom'>
          <Next onClick={this.setNextWeek}><FontAwesomeIcon icon='angle-right' color='black' size='lg' /></Next>
        </Tippy>
      </NextPreviousWeek>
    )
  }

  renderColumns = () => {
    const { meetings } = this.props
    const { weekDates } = this.state
    const weekDayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    if (!weekDates || !this.props.meetings) return <div>no meetings scheduled</div>
    return weekDates.map((date, index) => {
      return (
        <MeetingColumn
          key={date}
          date={date}
          meetings={meetings}
          onAddMeeting={this.toggleAddMeetingModal}
          day={weekDayNames[index]}
        />
      )
    })
  }

}

const mapStateToProps = ({ meetingsState, projectsState }) => {
  return {
    meetings: meetingsState.meetings,
    currentProject: projectsState.current_project,
    projects: projectsState.projects,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPorject: (project) => dispatch(setCurrentPorject(project)),
    createNewMeeting: (meeting) => dispatch(createMeeting(meeting)),
    getMeetings: (projectId) => dispatch(getMeetings(projectId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings);