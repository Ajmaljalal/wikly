import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { Column } from '../../components/common.styles'
import TaskItem from './TaskItem'

import {
  TaskItemDraggingContainer,
  ColumnHeader,
  HeaderIconsWrapper,
  ColumnBody,
  HeaderTitle,
  ActionButton
} from './tasksColumn.style'

import plusIcon from '../../assets/icons/plus-icon.svg'
import moreIcon from '../../assets/icons/more-icon.svg'

class TasksColumn extends React.PureComponent {

  tasks = {
    'task-1': { id: 'task-1', content: 'Take our the garbage' },
    'task-2': { id: 'task-2', content: 'Clean the car Clean the car Clean the car Clean the car Clean the car' },
    'task-3': { id: 'task-3', content: 'Wash the decious Clean the car Clean the car Clean the car Move the tree out' },
    'task-4': { id: 'task-4', content: 'Move the tree out Move the tree out  Move the tree out  Move the tree out  Move the tree out  Move the tree out  Move the tree out ' },
    'task-5': { id: 'task-5', content: 'Move the tree out' },
    'task-6': { id: 'task-6', content: 'Move the tree out' },
    'task-7': { id: 'task-7', content: 'Move the tree out' },
    'task-8': { id: 'task-8', content: 'Move the tree out' },
  }

  columns = {
    'column-1': {
      id: 'column-1',
      title: 'Open',
      tasksId: ['task-1', 'task-2', 'task-3', 'task-4', 'task-7', 'task-8']
    },
    'column-2': {
      id: 'column-2',
      title: 'Blocked',
      tasksId: ['task-5', 'task-6']
    },
    'column-3': {
      id: 'column-3',
      title: 'Work in progress',
      tasksId: []
    },
    'column-4': {
      id: 'column-4',
      title: 'In review',
      tasksId: []
    },
    'column-5': {
      id: 'column-5',
      title: 'In test',
      tasksId: []
    },
    'column-6': {
      id: 'column-6',
      title: 'Complete',
      tasksId: []
    },
    'column-7': {
      id: 'column-7',
      title: 'In production',
      tasksId: []
    }
  }
  columnOrder = ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6', 'column-7']

  render() {
    return (
      this.columnOrder.map((columnId) => {
        const column = this.columns[columnId];
        const tasks = column.tasksId.map(taskId => this.tasks[taskId])
        return (
          <Droppable
            droppableId={column.id}
            key={column.id}
          >
            {(provided, snapshot) => {
              return (
                <Column
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                  width={'14%'}
                  marginRight={'10px'}
                >
                  {this.renderColumnHeader(column)}
                  <ColumnBody>
                    {this.renderTaskElements(tasks)}
                    {provided.placeholder}
                  </ColumnBody>
                </Column>
              )
            }}
          </Droppable>
        )
      })
    )
  }

  renderColumnHeader = (column) => {
    return (
      <ColumnHeader>
        <HeaderTitle>{column.title}</HeaderTitle>
        <HeaderIconsWrapper>
          <ActionButton>
            <img src={plusIcon} alt='add'/>
          </ActionButton>
          <ActionButton>
            <img src={moreIcon} alt='more'/>
          </ActionButton>
        </HeaderIconsWrapper>
      </ColumnHeader>
    )
  }
  renderTaskElements = (tasks) => {
    return tasks.map((task, index) => {
      return (
        <Draggable
          draggableId={task.id}
          index={index}
          key={task.id}
        >
          {(provided, snapshot) => {
            return (
              <TaskItemDraggingContainer
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                isDragging={snapshot.isDragging}
                style={
                  { ...provided.draggableProps.style }
                }
              >
                <TaskItem task={task}/>
              </TaskItemDraggingContainer>
            )
          }}
        </Draggable>
      )
    })
  }
}

export default TasksColumn
