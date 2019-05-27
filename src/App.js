import React from 'react';
import { Container } from 'reactstrap';
import shuffle from 'lodash/shuffle';
import Card from './components/card';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import cards from './cards.json';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cardsList: cards,
      score: 0,
      topScore: 0,
      selected: []
    };
    this.handleClickEvent=this.handleClickEvent.bind(this)
  };
 

  handleClickEvent = event => {
    console.log(event.target)
    this.shuffleCards()
    this.pushPick(event)
  }

  shuffleCards = () => {
    this.setState({
      cardsList: shuffle(this.state.cardsList)
    })
    
  }

  pushPick = event => {
    console.log(event)
    this.setState({
      selected: [...this.state.selected, event.target.id]
    })
    console.log(this.state)
  };


  render() {
    const { cardsList } = this.state
    return (
      <React.Fragment>
        <Navbar />
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
