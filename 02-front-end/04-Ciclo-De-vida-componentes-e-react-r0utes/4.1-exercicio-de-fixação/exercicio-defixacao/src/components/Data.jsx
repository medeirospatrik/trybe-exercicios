import React, { Component } from 'react'

class Data extends Component {
  
  render() {
    const { person, load } = this.props;

    const personObj = person[0];
    console.log(personObj);
    

   

    return (
      <div>
        {load ? 'carregando...' 
        : <div>
          <p>{`${personObj.name.first} ${personObj.name.last}`}</p>
          <p>{personObj.email}</p>
          <p>{personObj.dob.age}</p>
          <img src={personObj.picture.large} alt={personObj.name.first} />
        </div> }
      </div>
    )
  }
}


export default Data