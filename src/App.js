import { useState } from 'react';
import Data from './components/Data.js';

function App() {

  const [deportistas, setDeportista] = useState(Data)

  return (
    <div className="App">
      <div deportistas={deportistas}></div>

    </div>
  );
}

export default App;
