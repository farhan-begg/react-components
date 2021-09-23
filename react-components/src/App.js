import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import Translate from './components/Translate';

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  }, {
    label: 'The Color Blue',
    value: 'blue'
  },
]


function App() {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle DropDown</button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}

          options={options} /> : null
      } */}

      <Translate />
    </div>

  );
}

export default App;
