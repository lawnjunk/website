import React from 'react'
import Header from '../header'

class Page extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.children)
    return (
      <div className='page'>
        <Header location={this.props.location} />
        {this.props.children}
      </div>
    )
  }
}

export default (Content) => (props) => 
  <Page {...props} >
    <Content {...props}/>
  </Page>
