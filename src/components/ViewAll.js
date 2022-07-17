import React, { Component } from 'react'

export default class ViewAll extends Component {
    state ={
        name: '',
    }

    render() {
        const name = this.props.name;

        return (
            <div>
                <p>{name}</p>
            </div>
        )
    }
}