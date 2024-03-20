import logo from './logo.svg';
import classes from './App.module.scss';
import { Button } from './Button';
import { Menu } from './Menu';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <Menu/>

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
        <img src={logo} className={classes["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={classes["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello world</p>
        <p>Hello world</p>
        <Button text="Hey"/>
      </header>
    </div>
  );
}

export default App;
