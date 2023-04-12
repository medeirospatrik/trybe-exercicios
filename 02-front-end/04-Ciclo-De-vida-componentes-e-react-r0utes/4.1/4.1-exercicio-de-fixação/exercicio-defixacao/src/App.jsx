import React, { Component } from 'react'
import Data from './components/Data';

class App extends Component {
  state = {
    load: true,
    person: '',
  }

   fechApi = async () =>{
    const result = await fetch('https://api.randomuser.me/');
    const data = await result.json()
    const { results } = data;
    this.setState({
     person: results,
     load: false,
    })
  }

  componentDidMount () {
    this.fechApi();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.person[0].dob.age > 50) return false;
    return true
  }

  render() {
    const { person, load } = this.state;
    return (
      <div>
        <Data person={person} load={load} />
      </div>
    )
  }
}

export default App;
