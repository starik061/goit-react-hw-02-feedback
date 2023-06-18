import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <>
        <button onClick={event => onLeaveFeedback(event)}>Good</button>
        <button onClick={event => onLeaveFeedback(event)}>Neutral</button>
        <button onClick={event => onLeaveFeedback(event)}>Bad</button>
      </>
    );
  }
}

export default FeedbackOptions;
