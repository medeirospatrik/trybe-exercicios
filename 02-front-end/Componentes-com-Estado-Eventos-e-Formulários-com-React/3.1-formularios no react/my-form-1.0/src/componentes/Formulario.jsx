import React, {Component} from "react";
import './formulario.css';

class Formulario extends Component {
  state = {
    name: '',
    email: '',
    checkbox: false,
    area: '',
    select: '',
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    console.log(this);
    console.log(value);
  }
  render() {
    return(
      <form action="" className="form">
        <label htmlFor="name">
          Nome:
          <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
        </label>  
        
        <label htmlFor="">
        email:
        <input type="email" name="email" id="email" onChange={this.handleChange} value={this.state.email}/>
        </label>

        <label htmlFor="check">
          cliqu aqui
        <input type="checkbox" name="checkbox" id="check" value={this.state.check} onChange={this.handleChange} />
        </label>

        <label htmlFor="selecionar">
          <select name="select" id="slecionar" onChange={this.handleChange} value={this.state.select}>
            <option value="Patrik">Patrik</option>
            <option value="Elisa">Elisa</option>
            <option value="Priscila">Priscila</option>
          </select>
        </label>

        <label htmlFor="area">
          <textarea 
          name="area" 
          id="area" 
          cols="30" 
          rows="10" 
          onChange={this.handleChange}
          value={this.state.area}></textarea>
          
        </label>
      </form>
    )
  }
}

export default Formulario;