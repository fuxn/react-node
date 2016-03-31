import React from "react";

var createFragment = require('react-addons-create-fragment');

export default class AppHandler extends React.Component {
    constructor(props) {
        super(props);

        this.props.stocks.push( createFragment({
            title: "Cozycloud"
        }));
        this.props.stocks.push( createFragment({
            title: "Cozycloud 2"
        }));
        this.props.stocks.push( createFragment({
            title: "Cozycloud 3"
        }));
    }

    static defaultProps = {
        maxLoops: 10,
        stocks: []
    };

    state = {
        loopsRemaining: this.props.maxLoops
    };

    render() {
        var stocks = this.props.stocks;
        return <div>
            <span>Hello App Handler test + {this.state.loopsRemaining}</span>
            <ul>
                {stocks.map(function (stock, index) {
                    return <li key={index}>{stock}</li>
                })}
            </ul>
        </div>;
    }
}
