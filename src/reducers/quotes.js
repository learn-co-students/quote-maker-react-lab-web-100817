
export const quotes = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);
    case "DELETE_QUOTE":
      return state.filter(quote => quote.id !== action.id);
    case "UPVOTE":
      return state.map(quote => {
        if (quote.id === action.id) {
          ++quote.votes
          debugger;
          return quote
        }
      });
    case "DOWNVOTE":
      return state.map(quote => {
        if (quote.id === action.id) {
          --quote.votes
          return quote
        }
      });;

    default:
      return state;
  }
};
