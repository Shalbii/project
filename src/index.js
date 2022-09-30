import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './Navigation';
//import Login from './components/List';
//import Array from './Array';
// import Dgraph from './Dgraph';
//import Vgraph from './Vgraph';
//import Hgraph from './Hgraph';
//import Salesdashboard from './Salesdashboard';
//import Appp from './Appp';
import Tasklist from './Tasklist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tasklist/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
