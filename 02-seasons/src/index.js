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
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return (
      <div>
        <div>Latitude: {this.state.lat}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
