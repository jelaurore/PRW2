import React, {Component} from 'react';
import Nav from '../component/Nav';

class Profile extends Component {
state = {
  
}

  render() {
    return (
      <div style={styles.app}>
        <Nav />
        <div>
          <form >
            <input type="text" name="fName"/>
            <input type="text" name="lName"/>
            <input type="text" name="st"/>
            <input type="text" name="city"/>
            <input type="text" name="zipCode"/>
            <input type="text" name="username"/>
            <input type="text" name="password"/>
            <button>
              Edit
            </button>
          </form>
        </div>
      </div>
    )
  }
  }

export default Profile

const styles = {
  app: {
    backgroundColor: '#fafafa'
  }
}