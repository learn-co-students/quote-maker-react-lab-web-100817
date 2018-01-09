import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { deleteQuote, upVote, downVote } from '../actions/quotes';
import { bindActionCreators } from 'redux';

class Quotes extends Component {

  render() {
    console.log (this.props.quotes)
    const quotes = this.props.quotes.map( (quote, i) => <QuoteCard key={i} quote={quote} upVote={this.props.upVote} deleteQuote={this.props.deleteQuote} downVote={this.props.downVote} /> )
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    upVote: upVote,
    deleteQuote: deleteQuote,
    downVote: downVote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
