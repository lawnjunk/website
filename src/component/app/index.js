import './_app.sass'
import React from 'react'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'

import Header from '../header'
import Page from '../page'
import Landing from '../landing'

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/slash' component={Page(Landing )} />
            <Route exact path='/article' component={Page(() => <h1> article </h1>)} />
            <Route exact path='/project' component={Page(() => <h1> project </h1>)} />
            <Route exact path='/contact' component={Page(() => <h1> contact </h1>)} />
            <Route exact path='/' component={() => <Redirect to='/slash' />} />
            <Route path='/404.html' component={() => <Redirect to='/slash' />} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
