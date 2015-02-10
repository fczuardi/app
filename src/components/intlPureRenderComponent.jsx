var React = require('react'),
    ReactIntl = require('react-intl');


var IntlPureRenderComponent = React.createClass({
    mixins: [
        React.addons.PureRenderMixin,
        ReactIntl.IntlMixin
    ],
    render: function (){
        return false;
    }
});

module.exports = IntlPureRenderComponent;
