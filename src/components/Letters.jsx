import React, { Component } from 'react'
import Letter from './Letter'

export class Letters extends Component {
    render() {

        let string = 'Available Letters'
        let letters = Object.keys(this.props.letterStatus) 
        console.log(letters);
        return (
            <div>
                <p>{string}</p>
                {letters.map((l,i)=> <Letter key={i} letter={l}
                letterStatus={this.props.letterStatus[l]} /> )}
                
            </div>
        )
    }
}

export default Letters
