import React, {Component} from 'react';
import Nav from '../component/Nav';
import Card from '../component/Card';

class Sleep extends Component {
  state = {
    sleep: [{
      img: 'testing',
      author: 'john doe'
    },{
      img: 'testing',
      author: 'john doe'
    }]
  }

  render() {
    return (
      <div style={styles.app}>
        <Nav />
        <div>
          Testing
          <Card />
          {
            this.state.sleep.map((post) => (
              <Card key={post.id}/>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Sleep;

const styles = {
  app: {
    backgroundColor: '#fafafa'
  }
}