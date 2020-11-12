import React, {Component} from 'react';
import Nav from '../component/Nav';
import Post from '../component/Post';
import Form from '../component/Form';

class Friends extends Component {
state = {
  posts: [
    {
    id: 1,
    fullName: "John Doe",
    about: "My name is John I'm a Full Stack Dev. Live in Orlando FL. Like coding.",
    profileImgUrl:"https://images.unsplash.com/photo-1489779162738-f81aed9b0a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2164&q=80"
  },
  {
    id: 2,
    fullName: "Maria Doe",
    about: "My name is Maria I'm a Full Stack Dev. Live in Orlando FL. Like coding.",
    profileImgUrl:"https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
  },
  {
    id: 3,
    fullName: "Sarah Doe",
    about: "My name is Sarah I'm a Full Stack Dev. Live in Orlando FL. Like coding.",
    profileImgUrl:"https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
  }
]
}

addPost = (post) => {
  console.log(post)
  this.setState({
    posts: [...this.state.posts, post]
  })
}
//Nice work on the filter method.
deletePost = (id) => {
  const filteredPost = this.state.posts.filter(post => post.id !== id)
  this.setState({
    posts: filteredPost
  })
  return this.state.posts
}

  render() {
    return (
      <div style={styles.app}>
        <Nav />
        <div>
          <Form addPost={this.addPost}/>
          {
            this.state.posts.map((post) => (
              <Post key={post.id} post={post} deletePost={this.deletePost}/>
            ))
          }
        </div>
      </div>
    )
  }
  }

export default Friends

const styles = {
  app: {
    backgroundColor: '#fafafa'
  }
}