import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    return (
      <section title={this.props.title}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
