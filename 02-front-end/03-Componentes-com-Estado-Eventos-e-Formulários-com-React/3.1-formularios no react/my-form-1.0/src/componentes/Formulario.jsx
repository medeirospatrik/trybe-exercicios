import React, {Component} from "react";
import './formulario.css';
import InformaçoesPessoais from "./InformaçoesPessoais";

class Formulario extends Component {
  state = {
    name: '',
    email: '',
    nao: false,
    sim: false,
    area: '',
    select: '',
    file: '',
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

      <InformaçoesPessoais handleChange={this.handleChange} value={this.state}/>

      <fieldset name="flamenguista">
          <legend>É flamenguista?</legend>
        <label htmlFor="sim">
          Sim
        <input type="checkbox" name="sim" id="sim" value={this.state.check} onChange={this.handleChange} />
        </label>
        <label htmlFor="nao">
          nao
        <input type="checkbox" name="nao" id="nao" value={this.state.check} onChange={this.handleChange} />
        </label>
        </fieldset>

        <fieldset name="conhece">
          <legend>Qual dessas pessoas voce conhece?</legend>
        <label htmlFor="selecionar">
          <select name="select" id="slecionar" onChange={this.handleChange} value={this.state.select}>
            <option value="Patrik">Patrik</option>
            <option value="Elisa">Elisa</option>
            <option value="Priscila">Priscila</option>
          </select>
        </label>
        </fieldset>

        <fieldset>
          <legend>Mande uma foto sua com essa pessoa</legend>
        <label htmlFor="">
          Desenha um "arcoiru" <br />
        <input type="file" />

        </label>
        </fieldset>
        <fieldset>
          <legend>Oque voce acha dessa pessoa?</legend>
        <label htmlFor="area" value={this.state.file} onChange={this.handleChange}>
          <textarea 
          name="area" 
          id="area" 
          cols="30" 
          rows="10" 
          onChange={this.handleChange}
          value={this.state.area}></textarea>
          
        </label>
        </fieldset>
        
      </form>
    )
  }
}

export default Formulario;