import React, { Component } from 'react';

class TypeButton extends React.Component {
    render() {
        return (
            <button class={"transform duration-200 ease-in-out hover:-translate-y-1 p-5 text-xl rounded font-bold shadow " + this.props.name} onClick={this.props.onClick} style={{ textTransform: 'capitalize' }}>
                {this.props.name}
            </button>
        );
    }
}

export default TypeButton;