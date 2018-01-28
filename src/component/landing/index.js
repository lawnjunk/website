import './_landing.sass'
import React from 'react'
import Header from '../header'

class Landing extends React.Component {
  render(){
    return (
      <div className='landing'>
        <div className='featured toy' >
          <h1> TOY </h1>
          <p> a micro-controller virtual machine + assembler, written in javascript. </p>
          <h2> FEATURING </h2>
          <h3> color coded memory </h3>
          <h3> step debuger </h3>
          <h3> live editor </h3>
        </div>

        <div className='spotlight'>
          <div className='one'>
            <main> 
              <h1>LEARNYOUNIX</h1>
              <p> a *nix + bash introduction </p>
            </main>
          </div>

          <div className='two'>
            <main> 
              <h1>THUMP</h1>
              <p> a wiggly javascript drum machine </p>
            </main>
          </div>

          <div className='three'>
            <main> 
              <h1>DOT DOT DOT DOT DOT DOT</h1>
              <p> a system config buddy </p>
            </main>
          </div>
        </div>

      { /*<div className='gallery'> </div>
        <div className='game'></div> */}
      </div>
    )
  }
}

export default Landing
