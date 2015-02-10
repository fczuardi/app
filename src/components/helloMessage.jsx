var React = require('react'),
    ReactIntl = require('react-intl'),
    FormattedMessage = ReactIntl.FormattedMessage,
    IntlPureRenderComponent = require('./intlPureRenderComponent.jsx');

class HelloMessage extends IntlPureRenderComponent {
    render() {
        var s = this.getIntlMessage;
        return (
<div>
    <FormattedMessage
        message={s('hello')}
        name={this.props.name}
    />
</div>
        );
  }
}

module.exports = HelloMessage;
