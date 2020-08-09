import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skeleton from 'react-loading-skeleton';
import Tippy from '@tippyjs/react';
import { Colors } from '../../assets/colors'
import { createMeeting } from '../../redux/meetings/actions'
import { getCurrentWeek, getLastWeek, getNextWeek } from '../../helpers/getDate'
import ContentHeader from '../../components/content-header/index'
import MeetingColumn from './MeetingColumn'
import CreateNewMeeting from './CreateNewMeeting'
import Button from '../../components/button/Button'

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
    week: 'current'
    
  }

  componentDidMount() {
    this.setState({
      weekDates: getCurrentWeek(),
    })
    
  }

  setPreviousWeek = () => {
    const { week } = this.state
    if (week === 'previous') return
    if (week === 'next') {
      this.setState({
        weekDates: getCurrentWeek(),
        week: 'current'
      })
    }
    if (week === 'current')
    this.setState({
      weekDates: getLastWeek(),
      week: 'previous'
    })
  }

  setNextWeek = () => {
    const { week } = this.state
    if (week === 'next') return
    if (week === 'previous') {
      this.setState({
        weekDates: getCurrentWeek(),
        week: 'current'
      })
    }
    if (week === 'current') {
      this.setState({
        weekDates: getNextWeek(),
        week: 'next'
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
    return (
      <BodyContainer>
        {this.renderHeader()}
        <Container>
          <ColumnsContainer>
            {this.renderColumns()}
          </ColumnsContainer>
        </Container>
         { isAddMeetingModalOpen ? <CreateNewMeeting toggleAddMeetingModal={this.toggleAddMeetingModal} /> : null }
      </BodyContainer>
    )
  }

  renderHeader = () => {
    return (
      <Header>
        <ContentHeader title={'Meetings'} />
        {this.renderNextAndPreviousButton()}
        <Buttons>
            <Button
              color='white'
              bgColor={Colors.green}
              fontSize='12px'
              onClick={this.toggleAddMeetingModal}
              >
              <FontAwesomeIcon icon='plus' color='white' />
              <span>Add Meeting</span>
            </Button>
        </Buttons>
      </Header>
    )
  }

  renderNextAndPreviousButton = () => {
    return (
      <NextPreviousWeek>
        <Tippy content='Previous week' className='tippy-tooltip'>
          <Previous onClick={this.setPreviousWeek}><FontAwesomeIcon icon='angle-left' color='black' size='lg' /></Previous>
        </Tippy>
        <Tippy content='Next week' className='tippy-tooltip'>
          <Next onClick={this.setNextWeek}><FontAwesomeIcon icon='angle-right' color='black' size='lg' /></Next>
        </Tippy>
      </NextPreviousWeek>
    )
  }

  renderColumns = () => {
    const { meetings } = this.props
    const { weekDates } = this.state
    const weekDayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    if (!weekDates || !this.props.meetingsState) return <Skeleton/>
    return weekDates.map((date, index) => {
      // date.replace(, '')
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

const mapStateToProps = ({meetingsState}) => {
  return {
    meetings: meetingsState.meetings
  }
}

const mapDispatchToProps = (disptach) => {
  return {
    createNewMeeting: (meeting) => disptach(createMeeting(meeting))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meetings);