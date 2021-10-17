import React from 'react'
import App from './App'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './components/Reducer'




// import React from 'react';
// //import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// // ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore(Reducer)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )



 render(
  <Provider store={store}>
     <App />
     </Provider>,   document.getElementById('root')
 )
