import React, { Component } from 'react'

class Form extends Component {

  state = {
    fullName: "",
    profileImgUrl:"",
    about: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state)
  }

  render() {
    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <input type="text" name="fullName" placeholder="please enter full name"  onChange={this.handleChange}/>
        <input type="text" name="profileImgUrl" placeholder="please enter profile url"  onChange={this.handleChange}/>
        <textarea required name="about" cols="40" rows="4" placeholder="Write about me"  onChange={this.handleChange}/>
        <button type="submit"> 
          Post
        </button>
    </form>
    )
  }
}

export default Form

const styles = {
  form: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '8rem',
    paddingRight: '25rem',
    paddingBottom: '1rem'
  }
}