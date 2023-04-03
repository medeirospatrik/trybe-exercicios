import React, {Component} from 'react';

const handleClick = () => console.log('Eu sou o botão 1');
const handleClick2 = () => console.log('Eu sou o botão 2');
const handleClick3 = () => console.log('Eu sou o botão 3');
class App extends Component {
  render() {
    return(
      <div>
        <button onClick={handleClick}>Meu botão1</button>
        <button onClick={handleClick2}>Meu botão1</button>
        <button onClick={handleClick3}>Meu botão1</button>
      </div>
    )
  }
}

export default App;
