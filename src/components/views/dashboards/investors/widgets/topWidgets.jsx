import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopWidget extends Component {
  render() {
    this.name = 'top';

    return (
      <div className='top-widget'>
        <h2>{this.props.title}</h2>
        <div className="bold">
          <h3>{this.props.boldText}</h3>
        </div>
        <p>{this.props.details}</p>
      </div>
    );
  }
}
TopWidget.propTypes = {
  title: PropTypes.String,
  boldText: PropTypes.String,
  details: PropTypes.String

};

export default TopWidget;
