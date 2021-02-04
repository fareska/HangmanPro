import React, { Component } from 'react'

export class Letter extends Component {
    render() {

        let letter = this.props.letter

        return (
            this.props.letterStatus
                ? <span style={{color : 'red'}} >{letter}</span>
                : <span> {letter} </span>
        )
    }
}

export default Letter
