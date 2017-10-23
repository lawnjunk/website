import './style/main.sass'
import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import {Provider} from 'react-redux'
import storeCreate from './lib/store-create'

export const Container = () => (
  <Provider store={storeCreate()}>
    <App/>
  </Provider>
)

ReactDom.render( <Container/> , document.getElementById('root'))
