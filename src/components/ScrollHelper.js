import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollHelper extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname && this.props.location.hash === '') {
      window.scrollTo(0, 0)
    }
  }

  render() {
    console.log(this.props.location)
    return this.props.children
  }
}

export default withRouter(ScrollHelper)