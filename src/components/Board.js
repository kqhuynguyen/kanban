import React, { useState } from "react";
import CardList from "./CardList";
import CardForm from "./CardForm";
import { Container, Segment, Grid, Modal } from 'semantic-ui-react'
// import TrelloCreate from "./TrelloCreate";
// import { Droppable, Draggable } from "react-beautiful-dnd";


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [{header: "header", cards: [{header: "abc", desc: "xyz"}, {header: "xyz", desc: "abc"}]},
      {header: "header", cards: [{header: "abc", desc: "xyz"}, {header: "xyz", desc: "abc"}]},
      {header: "header", cards: [{header: "abc", desc: "xyz"}, {header: "xyz", desc: "abc"}]},]
    }
  }
  onAddCard() {
    this.setState({
      editMode: true,
    })
  }
  onSubmit(desc) {
    this.setState({
      editMode: false,
      cards: [...this.state.cards, {desc: desc}]
    });
  }
  onCardClicked() {
    this.setState({
      editMode: true,
    });
  }
  render() {
    return (
      <div>
        <Segment>HINOKAMI KAGURA - ENBU</Segment>
        <Container>
          <Grid padded="horizontally" textAlign="center" container>
            {this.state.columns.map((col, idx) => <CardList key={idx} onAddCard={this.onAddCard.bind(this)} onCardClicked={this.onCardClicked.bind(this)} header={col.header} cards={col.cards}/>)}
          </Grid>
        </Container>
        <CardForm editMode={this.state.editMode}>
        </CardForm>
      </div>
    );
  }
}

export default Board;