import React, { Component } from 'react'

export default class ClassComp extends Component {
  
    state = {
        name:this.props.uname,
        age:10,
        place:"NOIDA"
    }

    handleClick =()=>{
        console.log(this.state.name);
        this.props.parentData(this.state.name)
    }
    handleChange = (event)=>{
     console.log(event.target.value);
      this.setState({name: event.target.value})
    }
  render() {
    console.log(this.props);
    return (
      <div>
        <h5>
            Name: {this.props.uname} <br/>
            Age: {this.state.age} <br/>
            Location: {this.state.place} 
        </h5><br/>
        <h5>Updated State Name:</h5>
        <input type='text' name={this.name} value={this.name} onChange={(event)=>{this.handleChange(event)}} />
        <br/>
        <button onClick={()=>{this.handleClick()} }>ChangeProps</button>
      </div>
    )
  }
}
