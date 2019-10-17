import React, { useState } from "react";
import TaskCard from './TaskCard'
import { Modal, Form, Button, Icon } from 'semantic-ui-react'

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      header: this.props.header || [],
      desc: this.props.desc || "Untitled",
      addToCol: this.props.addToCol,
    };
  }

  render() {
    return (
      <Modal open={this.props.editMode}>
        <Modal.Header>
          Card Information
        </Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input fluid label="Header" placeholder="Header"/>
            <Form.Input fluid label="Description" placeholder="Description"/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted>
            <Icon name='remove' /> Cancel
          </Button>
          <Button color='green' inverted onClick={this.state.addToCol}>
            <Icon name='checkmark' /> Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CardForm;