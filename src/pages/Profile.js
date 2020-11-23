import React, {Component} from 'react';
import Nav from '../component/Nav';

class Profile extends Component {

  constructor() {
    super()
    this.state = {
      user: [],
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
    this.fetchRandomUser();
  }

  fetchRandomUser = async() => {
    try {
      await fetch('https://randomuser.me/api/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let user = data.results.map((user) => {
          let userElm = '';

          if (typeof user !== undefined && typeof user.name !== undefined && typeof user.picture != undefined) {
            userElm = <div style={styles.userProfile} key={user}>
                        <img style={styles.avatar} src={user.picture.medium} alt="medium"/>
                        <h1>{user.name.first} {user.name.last}</h1>
                        <h4>{user.login.username}</h4>
                        <div style={styles.description}>
                          <h4>{user.location.city} {user.location.state}<span>,</span> {user.location.postcode}</h4>
                          <h4>{user.login.password}</h4>
                        </div>
                      </div>;
          }
          return(userElm)
        });
        this.setState({user: user, isLoading: false});
      });
    }
    catch(error){
      this.setState({ error: error, isLoading: false });
    }
  }

  render() {
    let { user, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div style={styles.app}>
        <Nav />
        <div style={styles.div}>
          <form>
            <label for="fname">First Name</label>
            <input style={styles.inputText} type="text" name="firstname" placeholder="Your name.."/>

            <label for="lname">Last Name</label>
            <input style={styles.inputText} type="text" name="lastname" placeholder="Your last name.."/>
          
            <label for="st">Street</label>
            <input style={styles.inputText} type="text" name="street" placeholder="Your street number.."/>

            <label for="city">City</label>
            <input style={styles.inputText} type="text" name="city" placeholder="Your city.."/>

            <label for="state">State</label>
            <input style={styles.inputText} type="text" name="state" placeholder="Your state.."/>

            <label for="zip">Zipcode</label>
            <input style={styles.inputText} type="text" id="zip" name="zip" placeholder="Your zipcode.."/>

            <label for="username">Username</label>
            <input style={styles.inputText} type="text" name="username" placeholder="Your username.."/>

            <label for="password">Password</label>
            <input style={styles.inputText} type="text" name="password" placeholder="Your password.."/>

            <label for="phone">Phone Number</label>
            <input style={styles.inputText} type="text" name="phone" placeholder="Your phone number.."/>

            <button style={styles.submitBtn} type="submit" value="Submit">Edit</button>
          </form>
        </div>

          <div>
            {user}
          </div>
      </div>
    )
  }
  }

export default Profile

const styles = {
  app: {
    backgroundColor: '#fafafa'
  },
  inputText: {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  div: {
    borderRadius: '5px;',
    backgroundColor: '#f2f2f2',
    padding: '20px'
  },
  submitBtn: {
    width: '100%',
    backgroundColor: 'green',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  userProfile: {
    margin: 'auto',
    width: '27em',
    height: '11em',
    background: '#fff',
    borderRadius: '.3em',marginTop: '-4.40em',
    marginLeft: '5.80em',
    color: '#16a085',
    fontSize: '1.53em',
    fontFamily: '"Coda", sans-serif',
    fontWeight: 'bold'
  },
  avatar: {
    padding: '.7em',
    marginLeft: '.3em',
    marginTop: '25%',
    height: '6.23em',
    width: '6.23em',
    borderRadius: '18em'
  },
  fullName: {
    margin: 'auto',
    marginTop: '-4.40em',
    marginLeft: '5.80em',
    color: '#16a085',
    fontSize: '1.53em',
    fontFamily: '"Coda", sans-serif',
    fontWeight: 'bold'
  },
  userName: {
    margin: 'auto',
    display: 'inline-block',
    marginLeft: '10.43em',
    color: '#3498db',
    fontSize: '.87em',
    fontFamily: '"varela round", sans-serif'
  },
  description: {
    margin: 'auto',
    marginTop: '5%',
    marginRight: '3em',
    width: '18em',
    color: '#7f8c8d',
    fontSize: '.87em',
    fontFamily: '"varela round", sans-serif'
  },
  state: {

  },
  city: {

  },
  postCode: {

  },
  password: {

  }
}