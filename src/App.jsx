import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';

import React, { Component } from 'react'

export class App extends Component {

  constructor(){
    super()
    this.state  = {
      letterStatus: this.generateLetterStatuses(),
      solution:{
        word: 'CALM',
        hint: 'Your ideal mood when coding '
      },
      score: 100
    }
  }

  generateLetterStatuses = ()=>{
    let letters = {}
    for(let i=65; i<91; i++){
      let res = String.fromCharCode(i)
      letters[res] = false
    }

     return letters
  }

  render() {
    return (
      <div className="App" >
        <Score score={this.state.score} />
        <Solution solution={this.state.solution} letterStatus={this.state.letterStatus} />
        <Letters letterStatus={this.state.letterStatus} />
      </div>
    )
  }
}

export default App


