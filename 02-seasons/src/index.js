import React from 'react';
import ReactDOM from 'react-dom';

/* 
    Func Based
*/

// const App = () => {
//
//   return (
//     <div>
//       <div>Latitude: </div>
//     </div>
//   );
// };

/*
    Class Based
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMsg: '' };
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }

  render() {
    // return (
    //   <div>
    //     <div>Latitude: {this.state.lat}</div>
    //     <br></br>
    //     <div>Error: {this.state.errMsg}</div>
    //   </div>
    // );
    if (!this.state.lat && this.state.errMsg) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    if (this.state.lat && !this.state.errMsg) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>loading...</div>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
