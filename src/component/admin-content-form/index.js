import React from 'react'

let emptyState = {
  title: '',
  date: '',
  description: '',
  url: '',
  github: '',
  keywords: '',
}

class AdminContentForm extends React.Component {
  constructor(props){
    super(props)
    this.state = emptyState
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSetState = (e) => {
    try{
      this.setState(JSON.parse(e.target.value))
    }catch(e){
      this.setState(emptyState)
      console.error(e)
    }
  }

  render(){
    return (
      <div>
        <input 
           type='text'
           name='title'
           placeholder='title'
           value={this.state.title}
           onChange={this.handleChange}
           />
        <input 
           type='date'
           name='date'
           placeholder='date'
           value={this.state.date}
           onChange={this.handleChange}
           />
        <input 
           type='text'
           name='description'
           placeholder='description'
           value={this.state.description}
           onChange={this.handleChange}
           />
        <input 
           type='text'
           name='url'
           placeholder='url'
           value={this.state.url}
           onChange={this.handleChange}
           />
        <input 
           type='text'
           name='github'
           placeholder='github'
           value={this.state.github}
           onChange={this.handleChange}
           />
         <input
           type='text'
           name='keywords'
           placeholder='keywords'
           value={this.state.keywords}
           onChange={this.handleChange}
           />
        <textarea
          placeholder='set state'
          value={JSON.stringify(this.state)}
          onChange={this.handleSetState}
          />
      </div>
    )
  }
}

export default AdminContentForm
