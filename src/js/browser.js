var React = require('react'),
    HelloMessage = require('../components/helloMessage.jsx'),
    messages = require('../../locales/pt/messages.json');

React.render(React.createElement(HelloMessage, {
    messages: messages,
    name: 'Lebowski'
}), document.body);
