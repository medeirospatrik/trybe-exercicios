import React, {Component} from 'react';


class App extends Component {

  constructor() {
    super();
  
    this.state = {
      numeroDeCliques1 : 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick.bind(this);
    this.handleClick3 = this.handleClick.bind(this);
  }

  handleClick() {
    
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }));
    console.log(this);
  }
  handleClick2() {
    this.setState((stadoAnterior, _props) => ({
      numeroDeCliques2: stadoAnterior.numeroDeCliques2 + 1,
    }))
  }
  
  handleClick3() {
    this.setState((aquiPodeSerQualquerNome, _props) => ({
      numeroDeCliques3: aquiPodeSerQualquerNome.numeroDeCliques3 + 1,
    }))
  }
  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return(
      <div>
        <button onClick={this.handleClick}>{numeroDeCliques1}</button>
        <button onClick={this.handleClick2}>{numeroDeCliques2}</button>
        <button onClick={this.handleClick3}>{numeroDeCliques3}</button>
      </div>
    )
  }
}

export default App;
