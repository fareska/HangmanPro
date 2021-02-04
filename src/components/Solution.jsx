import React, { Component } from 'react'
import Letter from './Letter';

export class Solution extends Component {


    render() {
        let letterStatus = this.props.letterStatus
        let hint = this.props.solution.hint
        let word = this.props.solution.word.split("")

        return (
            <div>
                {word.map((w, i) => {
                    return (
                        // <Letter key={i} letter={w} />
                        <Letter key={i} letter={this.props.letterStatus[w] ? w : ' _ '} />
                    )
                })}
                <p>{hint}</p>
            </div>
        )
    }
}


export default Solution
