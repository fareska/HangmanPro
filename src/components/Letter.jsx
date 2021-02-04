import React, { Component } from 'react'

export class Letter extends Component {
    
    selectLetter = () => this.props.selectLetter(this.props.letter) 

    render() {

        return (
            this.props.letterStatus
                ? <span style={{color : 'red'}} >{this.props.letter}</span>
                : <span onClick={this.selectLetter} > {this.props.letter} </span>
        )
    }
}

export default Letter
