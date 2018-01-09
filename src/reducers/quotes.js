export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {
    case "ADD_QUOTE":
      // console.log("quotes_reducer", state, action);
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case "UPVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state.slice(index, index + 1);
      quote[0].votes += 1;
      return [...state.slice(0, index), quote[0], ...state.slice(index + 1)];
    case "DOWNVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state.slice(index, index + 1);
      quote[0].votes > 0 ? (quote[0].votes -= 1) : null;
      return [...state.slice(0, index), quote[0], ...state.slice(index + 1)];
    default:
      return state;
  }
};
