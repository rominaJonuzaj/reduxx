import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
//import './App.css'
import Store from './redux/Store'
import UserContainer from './components/UserContainer'

function App () {
  return (
    <Provider store={Store}>
      <div className='App'>
        <UserContainer /> 
  
      </div>
    </Provider>
  );
}

export default App;
