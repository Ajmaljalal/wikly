const initState = {
  meetings: [
    {
      id: 'id',
      agenda: 5,
      attachements: 3,
      dateTime: '5/8/2020',
      duration: '30 minutes',
      invitees: 10,
      notes: 4,
      title: 'Should work on budget'

    },
    {
      id: '1',
      agenda: 5,
      attachements: 3,
      dateTime: '5/7/2020',
      duration: '30 minutes',
      invitees: 10,
      notes: 4,
      title: 'Should work on budget'

    },
    {
      id: 'id2',
      agenda: 5,
      attachements: 3,
      dateTime: '5/6/2020',
      duration: '30 minutes',
      invitees: 10,
      notes: 4,
      title: 'Should work on budget'

    }

  ]
}

const meetingsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_MEETING_SUCCESS':
      console.log('meeting added')
      break;
    default:
      return state
  }
}

export default meetingsReducer