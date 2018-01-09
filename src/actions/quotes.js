export const addQuote = (quote) => {
  return {type: "ADD_QUOTE", quote: quote}
}

export const deleteQuote = (id) => {
  return {type: "DELETE_QUOTE", id: id}
}

export const upVote = (id) => {
  return {type: "UPVOTE", id: id}
}

export const downVote = (id) => {
  return {type: "DOWNVOTE", id: id}
}
