import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './pages/Header'
import reportWebVitals from './reportWebVitals';
import server from './..server'
const cors = require('cors')

ReactDOM.render(
  <React.StrictMode>
    <Header title = 'Ecoleta'/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

app.use(cors())
app.use(server)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
