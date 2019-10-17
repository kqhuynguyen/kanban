import React, { useState } from "react";
import { Card } from 'semantic-ui-react'

class TaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.header,
      desc: this.props.desc,
    };
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{this.state.header}</Card.Header>
          <Card.Meta>{this.state.desc}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default TaskCard;