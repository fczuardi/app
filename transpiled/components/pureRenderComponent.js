var React = require('react');

class PureRenderComponent extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate;
    }
}

module.exports = PureRenderComponent;
