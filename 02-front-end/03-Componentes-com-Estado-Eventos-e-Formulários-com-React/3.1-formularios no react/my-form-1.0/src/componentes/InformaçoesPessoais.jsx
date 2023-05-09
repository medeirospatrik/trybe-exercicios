import React, { Component } from 'react'

class InformaçoesPessoais extends Component {
  render() {
    const {handleChange, value } = this.props
    const { name, email} = value;
    let errors = undefined;
    name.length < 100 ? errors = '' : errors = 'max caracteres 100';
    return (
      <fieldset>
          <legend>Informaçoes pessoais</legend>
        <label htmlFor="name">
          Nome:
          <input type="text" name="name" id="name" onChange={handleChange} value={name}/>
          <div>{errors}</div>
        </label>
        <br />
        
        <label htmlFor="">
        email:
        <input type="email"  name="email" id="email" onChange={handleChange} value={email}/>
        </label>
        </fieldset>
    )
  }
}

export default InformaçoesPessoais