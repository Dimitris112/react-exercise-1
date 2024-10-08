import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './Components/FunctionalGreeting';
import FunctionalGreetingwithProps from './Components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingwithProps />
    </div>
  );
}

export default App;
