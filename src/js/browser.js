var React = require('react'),
    HelloMessage = require('../components/helloMessage.jsx');

React.render(React.createElement(HelloMessage, {name: 'World'}), document.body);
