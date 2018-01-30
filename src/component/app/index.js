import './_app.sass'
import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import Page from '../page'
import Admin from '../admin'
import Header from '../header'
import Landing from '../landing'
import Project from '../project'
import FourOhFour from '../404'

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
            <Switch>
            <Route path='/slash' component={Page(Landing)} />
            <Route path='/article' component={Page(() => <h1> article </h1>)} />
            <Route path='/project' component={Page(Project)} />
            <Route path='/contact' component={Page(() => <h1> contact </h1>)} />
            <Route component={Page(FourOhFour)} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
