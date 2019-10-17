import React, { useState } from "react";
// import TrelloCard from "./TrelloCard";
// import TrelloCreate from "./TrelloCreate";
// import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from './Card';
import CardForm from './CardForm';
import AddNewCardButton from './AddNewCardButton';
// import { connect } from "react-redux";
// import { editTitle, deleteList } from "../actions";
// import Icon from "@material-ui/core/Icon";

const ListContainer = styled.div`
  background-color: #788ae2;  
  border-radius: 3px;
  position: transparent;
  width: 300px;
  padding: 8px;
  height: 500px;
  margin: 60px 8px 0 0;
`;

const ListTitle = styled.h4`
    color: #eee;
    font-size: 1.5em;
`;

const ListDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;


class TrelloList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.name,
      // cards: props.cards,
      cards: props.items || [],
      editMode: false,
    }
  }
  addNewCard(desc) {
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
      <ListContainer>
      <ListTitle>title</ListTitle>
      <ListDetail>
            {this.state.cards.map((item,index)=>(<Card onClick={this.onCardClicked.bind(this)} desc={item.desc} />))}
      </ListDetail>
        <AddNewCardButton onClick={this.addNewCard.bind(this)}></AddNewCardButton>
        <CardForm editMode={this.state.editMode} onSubmit={this.onSubmit.bind(this)} onClose={()=>this.setState({editMode:false})}></CardForm>
    </ListContainer>
    );
  }
}

export default TrelloList;