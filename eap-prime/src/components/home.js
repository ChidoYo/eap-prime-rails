import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {pageName: ''}
    this.getPageName = this.getPageName.bind(this)
  }

  getPageName() {
    this.setState({pageName: 'This is the Home Page'})
  }

  render() {
    return (
      <div className="col">
        <h1>Mi Casa</h1>
        <p>This is my house y'all!</p>

        <div>
          <button className="btn btn-primary" onClick={this.getPageName}>Get Bananas</button>
        </div>
        <p>
          {this.state.pageName}
        </p>
      </div>
    );
  }
}

export default Home;
