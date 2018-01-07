export default function quotesReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      let item = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0,item), Object.assign({}, state[item], {votes: state[item].votes += 1}), ...state.slice(item+1)]
    case 'DOWNVOTE_QUOTE':
      let anotherItem = state.findIndex(quote => quote.id === action.quoteId)
      if (state[anotherItem].votes > 0) {
        return [...state.slice(0,anotherItem), Object.assign({}, state[anotherItem], {votes: state[anotherItem].votes -= 1}), ...state.slice(anotherItem+1)]
      }
    default: return state;
  }
}
