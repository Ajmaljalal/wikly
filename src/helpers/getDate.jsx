export const getCurrentWeek = () => {
  let curr = new Date()
  let week = []
  for (let i = 1; i <= 5; i++) {
    let first = curr.getDate() - curr.getDay() + i
    let day = new Date(curr.setDate(first)).toLocaleString().slice(0, 8)
    week.push(day)
  }
  return week
}

export const getTodayDate = () => {
  let day = new Date().toLocaleString().slice(0, 8)
  return day
}
