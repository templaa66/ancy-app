import { useState } from 'react';
import './App.css';
import Landing from './Landing';
import Note from './Note';

function App() {

  const [showNote, setShowNote] = useState(false);

  return (
    <div className="App">
      {!showNote && <Landing renderCallback={setShowNote}/>}
      {showNote && <Note/>}
    </div>
  );
}

export default App;