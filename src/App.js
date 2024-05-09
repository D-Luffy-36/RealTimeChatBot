import logo from './logo.svg';
import './App.css';
import Login from './containers/Auth/Login';
import SignUp from './containers/Auth/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <SignUp></SignUp>
    </div>
  );
}

export default App;
