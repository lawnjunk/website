import React from 'react'

import AdminContentForm from '../admin-content-form'

// TODO: fetch metadata
// TODO: edit medadata
// TODO: write articles

class Admin extends React.Component {
  render(){
    return (
      <div>
        <h1> Admin </h1>
        <AdminContentForm />
      </div>
    )
  }
}

export default Admin
