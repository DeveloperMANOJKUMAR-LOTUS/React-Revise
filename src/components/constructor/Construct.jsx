import React, { Component } from 'react'

export class Construct extends Component {
    constructor(){
        super();
        this.state={
            name:"manojkumar"
        }
        console.warn("constructor is called ..")
    }
  render() {
    console.warn("render is called ")
    return (
        
      <div className='p-5 m-2 bg-primary text-white'>
        <p className='text-dark'>Constructor works only in the react class component . </p>
        <p className='text-dark'> Constructor is rendered before the render function ..</p>

        <h3>My Name is : {this.state.name}</h3>


      </div>
    )
  }
}

export default Construct