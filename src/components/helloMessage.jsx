var React = require('react'),
    PureRenderComponent = require('./pureRenderComponent.jsx');

class HelloMessage extends PureRenderComponent {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

module.exports = HelloMessage;
