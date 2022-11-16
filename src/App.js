import './App.css';
import MiApi from './components/MiApi';

function App() {
  return (
    <div className="App ">
        <MiApi className="personajes"/>
        <div className='imagenRandM'>
        <iframe src="https://giphy.com/embed/l378BzHA5FwWFXVSg" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/adultswim-l378BzHA5FwWFXVSg">via GIPHY</a></p>
        </div>
    </div>
  );
}

export default App;
