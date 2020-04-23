import React, { Fragment } from 'react'
import {
  TaskContainer,
  TaskHeader,
  TaskCategory,
  MoreIcon,
  TaskBody,
  TaskTitle,
  TaskFooterItem,
  TaskFooter,
} from './taskItem.style'
import moreIcon from '../../assets/icons/horizontal-more.svg'

class TaskItem extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      openTaskDetails: false,
    }
  }

  toggleMeetingDetailsModal = () => {
    this.setState({
      openTaskDetails: !this.state.openTaskDetails
    })
  }

  render() {
    const { openTaskDetails } = this.state
    const { task } = this.props;
    return (
      <Fragment>
        <TaskContainer onClick={this.toggleMeetingDetailsModal}>
          {this.renderTaskHeader()}
          <TaskBody>
            <TaskTitle>
              {task.content}
            </TaskTitle>
            {this.renderTaskFooter()}
          </TaskBody>
        </TaskContainer>
        {/* {openTaskDetails ? <TaskDetails onClose={this.toggleMeetingDetailsModal}/> : null} */}
      </Fragment>
    )
  }

  renderTaskHeader = () =>{
    return (
      <TaskHeader>
        <TaskCategory>
          {'web UI'}
        </TaskCategory>
        <MoreIcon>
          <img src={moreIcon} alt='more-icon' />
        </MoreIcon>
      </TaskHeader>
    )
  }

  renderTaskFooter = () => {
    return (
      <TaskFooter>
        <TaskFooterItem>
          {/* <img src={participantsIcon} alt='participants-icon'/> */}
          {'23'}
        </TaskFooterItem>
        <TaskFooterItem>
          {/* <img src={agendaIcon} alt='agenda-icon'/>    */}
          {'23'}
        </TaskFooterItem>
        <TaskFooterItem>
          {/* <img src={attachIcon} alt='attachments-icon'/> */}
          {'2'}
        </TaskFooterItem>
        <TaskFooterItem>
          {/* <img src={notesIcon} alt='notes-icon'/> */}
          {'12'}
        </TaskFooterItem>
      </TaskFooter>
    )
  }
}

export default TaskItem;