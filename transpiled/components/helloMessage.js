var React = require('react');

class HelloMessage extends React.Component {
  render() {
    return React.createElement('div', null, 'Hello ', this.props.name);
  }
}

module.exports = HelloMessage;
