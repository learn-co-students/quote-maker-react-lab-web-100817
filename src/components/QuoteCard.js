import React from 'react';
import { bindActionCreators } from 'redux';
import { deleteQuote, upVote, downVote } from '../actions/quotes';
import { connect } from 'react-redux';

class QuoteCard extends React.Component {
  render(){
    return (
      <div>
        <div className="card card-inverse card-success card-primary mb-3 text-center">
          <div className="card-block">
            <blockquote className="card-blockquote">
              <p>{this.props.quote.content}</p>
              <footer>- author <cite title="Source Title">{this.props.quote.author}</cite></footer>
            </blockquote>
          </div>
          <div className="float-right">
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.props.upVote(this.props.quote.id)}
              >
                Upvote
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.props.downVote(this.props.quote.id)}
              >
                Downvote
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.props.deleteQuote(this.props.quote.id)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {this.props.quote.votes}
          </div>
        </div>
      </div>
    )
  }
}
export default QuoteCard;
