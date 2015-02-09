var React = require('react'),
    PureRenderComponent = require('./pureRenderComponent.jsx');

class HelloMessage extends PureRenderComponent {
  render() {
    return React.createElement('div', null, 'Hello ', this.props.name);
  }
}

module.exports = HelloMessage;
