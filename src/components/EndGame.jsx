import React, { Component } from 'react'

export default class EndGame extends Component {
    render() {
        return (
            <div>
                {this.props.isScorePositive()
                    ? <p>Looser, The Secret is {this.props.word}!</p>
                    : <p>Good boy, {this.props.word} is Correct</p>}
                    <button onClick={()=>this.props.shouldRestart()} >Restart</button>
            </div>

        )
    }
}
