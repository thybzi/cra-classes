import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

function App() {
  const menuItems = [
    'Первое',
    'Второе',
    'Третье',
    'Компот',
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Menu>
          {menuItems.map(
            (v, i) => (<MenuItem id={'item' + (i + 1)} key={i} text={v}/>)
          )}
        </Menu>
        <Button
          text="Hello"
          smallText="world"
          onClick={() => {
            alert('Hi');
          }}
          style={{
            color: 'red',
          }}
          id="myButton"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button text="Hey"/>
      </header>
    </div>
  );
}

export default App;
