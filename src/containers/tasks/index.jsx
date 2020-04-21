import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { BodyContainer, Container } from '../../components/common.styles'
import ContentHeader from '../../components/content-header/index'

import TasksColumn from './TasksColumn'

class Tasks extends Component {
  render() {
    console.log('dashboard page')
    return (
      <BodyContainer>
        <ContentHeader title={'Tasks'} />
        <DragDropContext onDragEnd={result => console.log(result)}>
          <Container>
            <TasksColumn/>
          </Container>
        </DragDropContext>
      </BodyContainer>
    )
  }
}

export default Tasks;