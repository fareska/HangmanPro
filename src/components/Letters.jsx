import React, { Component } from 'react'
import Letter from './Letter'

export class Letters extends Component {
    render() {

        let string = 'Available Letters'

        return (
            <div>
                <p>{string}</p>
                <Letter/>
            </div>
        )
    }
}

export default Letters
