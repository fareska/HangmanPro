import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import React, { Component } from 'react'
import EndGame from './components/EndGame';

export class App extends Component {

  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: this.getSecret(),
      score: 100
    }
  }

  getSecret = () => {
    let secrets = [
      { word: 'CALM', hint: 'Your ideal mood when coding ' },
      { word: 'ALI', hint: 'Float like a butterfly sting like a bee ' },
      { word: 'RENDER', hint: 'What happens right after the setState ? ' },
      { word: 'THIS', hint: 'The object who called the function' }
    ]
    let solution = secrets[Math.floor(Math.random() * 4)]
    return solution
  }

  generateLetterStatuses = () => {
    let letters = {}
    for (let i = 65; i < 91; i++) {
      let res = String.fromCharCode(i)
      letters[res] = false
    }

    return letters
  }

  shouldRestart = () => {
    console.log('whats going on ? ');
    let letters = this.generateLetterStatuses()
    this.setState({
      letterStatus: letters,
      solution: this.getSecret(),
      score: 100
    })
  }

  isCorrect = l => this.state.solution.word.search(l) === -1 ? false : true

  updateScore = l => {
    let points = 0
    this.isCorrect(l) ? points += 5 : points -= 30
    return points
  }

  isScorePositive = () => {
    if (this.state.score < 0 || this.state.score === 0) return true
  }

  secretReveled = () => {
    let word = this.state.solution.word.split("")
    let counter = 0
    word.forEach(w => {
      if (this.state.letterStatus[w] !== false) { counter++ }
    })
    return counter === word.length ? true : false
  }

  isGameOver = () => {
    if (this.isScorePositive()) return true
    if (this.secretReveled()) return true

  }

  selectLetter = l => {
    let points = this.updateScore(l)
    let letterStatusUpdate = { ...this.state.letterStatus }
    letterStatusUpdate[l] = true
    this.setState({
      letterStatus: letterStatusUpdate,
      score: this.state.score + points
    })
  }

  render() {

    if (this.isGameOver()) {
      return (
        <EndGame shouldRestart={this.shouldRestart} word={this.state.solution.word} isScorePositive={this.isScorePositive} secretReveled={this.secretReveled} />
      )

    }
    else return (
      <div className="App" >
        <Score score={this.state.score} />
        <Solution solution={this.state.solution} letterStatus={this.state.letterStatus} />
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
      </div>
    )
  }
}

export default App


