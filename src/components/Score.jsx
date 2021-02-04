import React, { Component } from 'react'

export class Score extends Component {
    
    colorScoreText = score =>{
        if(score > 80) {return 'green'}   
        if(score < 50) {return 'red'}
        else return 'orange'   
    } 
    
    render() {
        return (
            <div style={{color:this.colorScoreText(this.props.score)}}>
                {this.props.score}
            </div>
        )
    }
}

export default Score
