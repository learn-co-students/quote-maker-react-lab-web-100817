export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(q => q.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      let quote = state.find(q => q.id === action.quoteId);
      let index = state.indexOf(quote);
      return [
        ...state.slice(0, index),
        { ...quote, votes: quote.votes + 1 },
        ...state.slice(index + 1)
      ];
    case "DOWNVOTE_QUOTE":
      quote = state.find(q => q.id === action.quoteId);
      index = state.indexOf(quote);
      let votes = quote.votes > 0 ? quote.votes - 1 : 0;
      return [
        ...state.slice(0, index),
        { ...quote, votes },
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};
