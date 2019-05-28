import React from 'react';
import { Container } from 'reactstrap';
import shuffle from 'lodash/shuffle';
import Card from './components/card';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import cards from './cards.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardsList: cards,
      score: 0,
      topScore: 0,
      selected: []
    };
    this.handleClickEvent = this.handleClickEvent.bind(this)
  };


  handleClickEvent(id) {
    this.shuffleCards()
    this.handleScore()
    this.pushPick(id)
  }

  shuffleCards = () => {
    this.setState({
      cardsList: shuffle(this.state.cardsList)
    })

  }

  pushPick = id => {
    if (this.state.selected.indexOf(id) === -1) {
      this.setState({
        selected: this.state.selected.concat(id)
      })
      this.handleScore()
    } else {
      alert("You've already selected that card!")
      this.setState({
        score: 0,
        topScore: 0,
        selected: []
      })
    }
  };

  handleScore = () => {
    const currentScore = this.state.score + 1
    this.setState({
      score: currentScore
    })
    if (currentScore >= this.state.topScore){
      this.setState({
        topScore: currentScore
      })
    }
  }


  render() {
    const { cardsList, score, topScore } = this.state
    // console.log(this.state.cardsList.id)
    console.log(this.state)
    return (
      <React.Fragment>
        <Navbar currentScore={score} topScore={topScore}/>
        <Container fluid style={containerStyle}>
          <Wrapper>
            {
              cardsList.map(card => {
                // console.log(card)
                return (
                  <Card
                    key={card.id}
                    name={card.name}
                    image={card.image}
                    id={card.id}
                    handleClick={this.handleClickEvent}
                  />
                )
              })
            }
          </Wrapper>
        </Container>
      </React.Fragment>
    );
  };
};

const containerStyle = {
  background: 'grey'
}

export default App;
