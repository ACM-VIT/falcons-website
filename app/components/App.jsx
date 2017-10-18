import React from 'react';
import Header from './header.jsx';

class App extends React.Component {
    render() {
        return (
          <div style={{textAlign:'center'}}>
              <Header />
              <h2>Hey Smile! :)</h2>
          </div>
        );
    }
}

export default App;