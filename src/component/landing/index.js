import './_landing.sass'
import React from 'react'
import Header from '../header'

class Landing extends React.Component {
  render(){
    return (
      <div className='landing'>
        <div className='featured' >
          <h1> cool </h1>
        </div>

        <div className='spotlight'>
          <div className='one'>
            <main> 
            </main>
          </div>

          <div className='two'>
            <main> 
            </main>
          </div>

          <div className='three'>
            <main> 
            </main>
          </div>
        </div>

        <div className='gallery'> </div>

        <div className='game'></div>
      </div>
    )
  }
}

export default Landing
