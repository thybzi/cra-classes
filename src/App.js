import logo from './logo.svg';
import classes from './App.module.css';
import { Button } from './Button';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { Link, NavLink, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const itemsPerPage = 10;
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(params.get('page') || 1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      .then((res) => (res.json()))
      .then((data) => {
        const from = (page - 1) * itemsPerPage;
        const to = from + itemsPerPage;
        setItems(data.meals.slice(from, to));
      })
  }, [page]);

  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <Menu/>

        <ul>
          {items.map((itemData) => ((
            <li key={itemData.idMeal}>
              {itemData.strMeal} ({itemData.strCategory})
            </li>
          )))}
        </ul>

        <ol style={{
          display: 'flex',
          gap: 10,
          listStyleType: 'none',
          padding: 0,
          marginLeft: 0,
        }}>
          {[1, 2, 3, 4, 5].map((pageNum) => ((
            <li key={pageNum}>
              <NavLink to={`/?page=${pageNum}`} onClick={() => {
                setPage(pageNum);
              }}>{pageNum}</NavLink>
            </li>
          )))}
        </ol>

        {/* <Link to="other">Перейти на другую страницу</Link> */}
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
