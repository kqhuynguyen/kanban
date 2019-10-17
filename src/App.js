import React from 'react';
import Board from './components/Board';
import logo from './logo.svg';
import './App.css';
// import TrelloList from './components/TrelloList'
import 'semantic-ui-css/semantic.min.css';
// import { Button } from 'react-bootstrap';
//172.28.165.156:5000

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  add_new_column(column) {
    this.setState({
      list: [...this.state.list, column]
    })
  }

  delete_column(e) {
    console.log(e.target.value)
    this.setState({
      list: this.state.list.filter((x,i) => i != e.target.value)
    })
  }
  render() {
    return (
      <div className="App">        
        <Board />
      </div>
    );
  }
}
export default App;
