import React from "react";

export default class ClassBased extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Class Based Component</h2>
                <p>This is a class-based component.</p>
                <p>Props: {JSON.stringify(this.props)}</p>
            </div>
        );
    }
}