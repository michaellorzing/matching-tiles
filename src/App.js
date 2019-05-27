import React from 'react';
import shuffle from 'lodash/shuffle'
import Card from './components/card';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import cards from './cards.json';
import './App.css';

class App extends React.Component {
  state = {
    cardsList: cards,
    score: 0,
    topScore: 0
  };

  shuffleCards = () => {
    console.log('hit')
    this.setState({
     cardsList: shuffle(this.state.cardsList)
    })
  }


  render() {
    const { cardsList } = this.state
    return (
      <container className='bg-dark'>
        <Navbar />
        <Wrapper>
          {
            cardsList.map(card => {
              return (
                <Card
                  key={card.id}
                  name={card.name}
                  image={card.image}
                  id={card.id}
                  handleClick= {() => this.shuffleCards()}
                />
              )
            })
          }
        </Wrapper>
      </container>
    );
  };
};

export default App;
