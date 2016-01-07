export default function schools (
  state = [

  ], action
) {
  switch (action.type) {
    case 'SCHOOL_SEARCH':
      return action.data
    default:
      return state
  }
}
