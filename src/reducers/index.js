const initialState = [{
  user: '',
  content: '',
  rate: '',
  rateCount: '',
  average: '',
  timestamps: ''
}]

const mainReducer = (state = initialState, action) => {
  console.log("Action", action)
  console.log("State", state)
}

export default mainReducer