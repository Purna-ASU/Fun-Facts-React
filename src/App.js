import logo from "./logo.svg";
import './App.css';

function App() {
  return (
    <div>
      <img src={logo} width="90px" alt="logo" />
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k starts on Github</li>
        <li>is developed by Facebook</li>
        <li>Powers thousands of enterprise apps, including moblie apps</li>
      </ul>
    </div>
  );
}

export default App;
