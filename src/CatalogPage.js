import classes from './App.module.scss';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { TopBar } from './TopBar';

export function CatalogPage() {
  const items = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <TopBar/>

        <ul style={{
          display: 'flex',
          listStyleType: 'none',
        }}>
          {items.map((itemData) => ((
            <li key={itemData.idMeal}>
              <img
                src={itemData.strMealThumb}
                alt={itemData.strMeal + ' photo'}
                width="100"
                height="100"
              />
              <div>
                {itemData.strMeal} ({itemData.strCategory})
              </div>
              <Button
                onClick={() => {
                  navigate(`/catalog/${itemData.idMeal}`);
                  // navigate(itemData.idMeal);
                }}
                text="О блюде"
              />
            </li>
          )))}
        </ul>

        {/* <ol style={{
          display: 'flex',
          gap: 10,
          listStyleType: 'none',
          padding: 0,
          marginLeft: 0,
        }}>
          {[1, 2, 3, 4, 5].map((pageNum) => ((
            <li key={pageNum}>
              <NavLink
                to={`/catalog/?page=${pageNum}`}
                onClick={() => {
                  setPage(pageNum);
                }}
              >{pageNum}</NavLink>
            </li>
          )))}
        </ol> */}
      </header>
    </div>
  );
}
