import React, {Component} from 'react';


class App extends Component {
 
   handleClick = () => {
    console.log(this)
    console.log('Eu sou o botão 1');
  }
   handleClick2 = () => console.log('Eu sou o botão 2');
  handleClick3 = () => console.log('Eu sou o botão 3');
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Meu botão1</button>
        <button onClick={this.handleClick2}>Meu botão1</button>
        <button onClick={this.handleClick3}>Meu botão1</button>
      </div>
    )
  }
}

export default App;
