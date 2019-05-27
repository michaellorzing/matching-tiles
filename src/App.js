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


  handleClickEvent = event => {
    // console.log(event.target)
    this.shuffleCards()
    this.pushPick(event)
    this.newTopScore()
  }

  shuffleCards = () => {
    this.setState({
      cardsList: shuffle(this.state.cardsList)
    })

  }

  pushPick = event => {
    this.state.cardsList.forEach((card) => {
      console.log(card)
    })
    this.setState({
      selected: [...this.state.selected, event.target.id]
    })
    console.log(this.state)
    if (this.state.selected === event.target.id) {
      alert("You've already selected that card!")
      this.setState({
        count: [],
        score: 0
      });
    } else {
      this.setState(prevState => {
        return {count: prevState.score++}
      })
    }
  };

  newTopScore = () => {
    if (this.state.score !== this.state.topScore){
      this.setState({
        topScore: this.state.score
      })
    }
  }


  render() {
    const { cardsList, score, topScore } = this.state
    return (
      <React.Fragment>
        <Navbar currentScore={score} topScore={topScore}/>
        <Container fluid style={containerStyle}>
          <Wrapper>
            {
              cardsList.map(card => {
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
