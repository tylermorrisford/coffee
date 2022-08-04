import './App.css';
import Emoji from 'react-emojis'

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <p>Hi, I'm tyler</p>
          <p>I like coffee</p>
          <Emoji emoji="hot-beverage"/>
        </header>
    </div>
  );
}

export default App;
