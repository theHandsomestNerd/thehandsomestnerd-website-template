import ReactDOM from 'react-dom';
// import App from './App'
import reportWebVitals from "./reportWebVitals";
import AppWrapper from "./AppWrapper";
const container = document.getElementById('root');
ReactDOM.render(<AppWrapper />, container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();