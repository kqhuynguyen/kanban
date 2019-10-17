import React, { useState } from "react";
import TaskCard from './TaskCard'
import { Grid, Card, Segment, Header, Button, Icon } from 'semantic-ui-react'

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards || [],
      header: this.props.header || "Untitled",
    };
  }

  render() {
    return (
      <Grid.Column width={4} textAlign="left" verticalAlign="top" >
        <Header attached="top" color="blue">{this.state.header}</Header> 
        <Segment color="blue" attached>
          
        <Card.Group>
          {this.state.cards.map((card, idx) => 
            <TaskCard key={idx} header={card.header} desc={card.desc}/>  
          )}
        </Card.Group>
        </Segment>
        <Button icon attached="bottom" size="mini" color="facebook" onClick={this.props.onAddCard}>
            <Icon name='plus' />
            Add Task
        </Button>
      </Grid.Column>
    );
  }
}

export default CardList;