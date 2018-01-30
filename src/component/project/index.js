import './_project.sass'

import React from 'react'
import Markdown from 'react-markdown'

class Project extends React.Component {
  constructor(props){
    super(props) 
    this.state = {article: ''}
  }
  componentWillMount(){
    try {
      this.setState({article: require('../../content/project/slugina/slugtina.md')})
    } catch (e) {
      console.error(e)
    }
  }
  render(){
    return (
      <div className='project'>
        <Markdown source={this.state.article} />
      </div>
    )
  }
}

export default Project
