import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Post = ({post, deletePost}) => {
  return (
    <div style={styles.post}>
      <div style={styles.postHeader}>
      <CgProfile 
      style={styles.postAvatar}
      alt='Aaron'
      src="/static/images/cgprofile/1.jpg"
      >

      </CgProfile>
    <h3>{post.username}</h3>
    <button style={styles.deleteBtn} onClick={() => deletePost(post.id)}>X</button>
      </div>
      <img style={styles.postImg} src={post.profileImgUrl} alt=""/>

    <h4 style={styles.postTxt}><strong>{post.fullName} </strong>{post.about}</h4>
    </div>
  )
}

export default Post

const styles = {
  post: {
    backgroundColor: 'white',
    maxWidth: '500px',
    border: '1px solid lightgray',
    marginBottom: '45px',
    marginLeft: '500px'
  },
  postHeader: {
  display: 'flex',
  alignItems: 'center',
  padding: '20px 10px'
  },
  deleteBtn: {
  backgroundColor: 'white',
  marginLeft: '22rem',
  border: 'none',
  cursor: 'pointer'
  },
  postImg: {
  width: '100%',
  objectFit: 'contain',
  borderTop: '1px solid lightgray'
  },
  postTxt: {
  fontWeight: 'normal',
  padding: '20px'
  },
  postAvatar: {
    marginRight: '10px'
  }
}