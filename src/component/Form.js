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
        <input style={styles.input} type="text" name="fullName" placeholder="please enter full name"  onChange={this.handleChange}/>
        <input style={styles.input} type="text" name="profileImgUrl" placeholder="please enter profile url"  onChange={this.handleChange}/>
        <textarea style={styles.input} required name="about" cols="40" rows="4" placeholder="Write about me"  onChange={this.handleChange}/>
        <button style={styles.btn} type="submit"> 
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
    margin: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '8rem',
    paddingRight: '25rem',
    paddingBottom: '1rem'
  },
  input: {
    margin: '10px'
  },
  btn: {
    marginLeft: '10rem',
    width: '100px',
    backgroundColor: 'rgba(149, 165, 166,1.0)',
    cursor: 'pointer'
  }
}