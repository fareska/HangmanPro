import React, { Component } from 'react'

export class Solution extends Component {
    
    
    render() {
        let spaces = ['_', '_', '_', '_']
        let hint = 'the hint word'
        return (
            <div>
                {spaces.map((s,i)=> <span> {s} </span> )}
                <p>{hint}</p>
            </div>
        )
    }
}

export default Solution
