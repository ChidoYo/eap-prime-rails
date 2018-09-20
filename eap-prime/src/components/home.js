import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      homes: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/homes')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            homes: result
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, homes } = this.state;

    if (error) {
      return (
        <div className="col">
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="col">
          Loading...
        </div>
      );
    } else {
      return (
        <div className="col">
          {homes.map((home, index) => (
            <div key={index}>
              <h1>{home.name}</h1>
              <p>{home.info}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Home;
