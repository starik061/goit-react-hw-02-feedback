import { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.elementType.isRequired,
  };
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
