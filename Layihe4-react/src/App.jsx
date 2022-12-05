import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import './reset.css';
import './common.css';
class App extends React.Component {
  render() {
    return (
      <div className="app">
  
        <MainPage/>
        
      </div>
    );
  }
}

export default App;
