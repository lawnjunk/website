import './_app.sass'
import React from 'react'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'

import Page from '../page'
import Admin from '../admin'
import Header from '../header'
import Landing from '../landing'

console.log({__DEBUG__})

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            { __DEBUG__
              ? <Route path='/admin' component={Page(Admin)} />
              : undefined
            }
            <Route path='/slash' component={Page(Landing)} />
            <Route path='/article' component={Page(() => <h1> article </h1>)} />
            <Route path='/project' component={Page(() => <h1> project </h1>)} />
            <Route path='/contact' component={Page(() => <h1> contact </h1>)} />
            <Route path='/404.html' component={() => <Redirect to='/slash' />} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
