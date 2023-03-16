import './App.css';
import Footer from './common/Footer.js';
import MicButton from './components/MicButton';

function App() {
  return (
    <div className="App">
      <textarea id="w3review" name="w3review" rows="40" cols="50">
      
      </textarea>
      <div className="mic-button-container">
        <MicButton />
      </div>
      <Footer />
    </div>
  );
}

export default App;
