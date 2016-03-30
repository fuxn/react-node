import React from "react";

export default class AppHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "Initial State: " + new Date().toString()
        };
    }
    render() {
        return <div>Hello App Handler test + {state.date}
        </div>;
    }
}
