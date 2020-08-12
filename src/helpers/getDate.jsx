import moment from 'moment';

export const getCurrentWeek = () => {
  let curr = new Date()
  let week = []
  for (let i = 1; i <= 5; i++) {
    let first = curr.getDate() - curr.getDay() + i
    let day = new Date(curr.setDate(first)).toLocaleString().slice(0, 9)
    week.push(day)
  }
  return week
}

export const getLastWeek = () => {
  let today = new Date()
  let dayOfWeek = today.getDay()
  let week = []
  for (let i = 1; i <= 5; i++) {
    week.push(moment().subtract(7 + (dayOfWeek-i), 'days').format('M/D/YYYY'))
  }
  return week
}

export const getNextWeek = () => {
  let today = new Date()
  let dayOfWeek = today.getDay()
  let week = []
  for (let i = 1; i <= 5; i++) {
    week.push(moment().add(7 - (dayOfWeek-i), 'days').format('M/D/YYYY'))
  }
  return week
}

export const getTodayDate = () => {
  let day = new Date().toLocaleString().slice(0, 9)
  return day
}

export const getTimeFromDate = (time) => {
  return moment(time.seconds).format("LT")
}

export const getTimeLeft = (startTime) => {
  const now = moment();
  const deadline = moment(startTime.seconds);
  return now.to(deadline)
}
