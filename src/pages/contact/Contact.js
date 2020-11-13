import React, {Component} from 'react';
import Nav from '../../component/Nav';
import '../contact/Contact.css';

class Contact extends Component {
  render() {
    return (
  <div>
    <Nav />
    <div>
    <h1 style={styles.container}>Contact</h1>
    </div>

    <section className="section-form">
      <div className="row">
        <h2 style={styles.h2}>We're happy to hear from you</h2>
      </div>
      <div className="row">
        <form method="POST" action="#" className="contact-form">
          <div className="row">
            <div className="col span-1-of-3">
              <label>Name</label>
            </div>
            <div className="col span-2-of-3">
              <input type="text" name="name" id="name" placeholder="Enter name" required/>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>Email</label>
            </div>
            <div className="col span-2-of-3">
              <input type="email" name="email" id="email" placeholder="Enter email" required/>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>Newsletter?</label>
            </div>
            <div className="col span-2-of-3">
              <input type="checkbox" name="news" id="news" checked/> Yes, Please
            </div>
          </div>
          <div className="row">
            <div class="col span-1-of-3">
              <label>Drop us a line</label>
            </div>
            <div className="col span-2-of-3">
              <textarea id="textarea" placeholder="Please type your message"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>&nbsp;</label>
            </div>
            <div className="col span-2-of-3">
              <input type="submit" value="Submit!"/>
            </div>
          </div>
        </form>
      </div>
    </section>

  </div>      
    );
  }
  }

export default Contact

const styles = {
  container: {
    margin: '50px',
    textAlign: 'center'
  },
  h2: {
    textAlign: 'center',
    fontSize: '22px',
    margin: '50px',
    marginLeft: '20%'
  }
}