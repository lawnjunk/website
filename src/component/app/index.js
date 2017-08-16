import React from 'react'
import {HashRouter, Route} from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <HashRouter>
          <div>
            <Route exact path='/' component={() => <p> hello world </p>} />
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App
