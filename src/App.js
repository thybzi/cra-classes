import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import { OtherPage } from './OtherPage';
import { CatalogPage } from './CatalogPage';
import { ItemPage } from './ItemPage';
import { createContext, useState } from 'react';

export const AppContext = createContext(null);

export function App() {
    // const [username, setUsername] = useState(null);
    // const [fullname, setFullname] = useState(null);
    const [userData, setUserData] = useState({
      username: null,
      fullname: null,
    });
    const [isLight, setIsLight] = useState(false);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/other',
            element: <OtherPage/>
        },
        {
          path: '/catalog',
          element: <CatalogPage/>,
          loader: async () => {
            const res = await fetch(
              'https://www.themealdb.com/api/json/v1/1/search.php?f=c'
            );
            const data = await res.json();
            return data.meals.slice(0, 5);
          },
        },
        {
          path: '/catalog/:itemId',
          element: <ItemPage/>,
          loader: async ({params}) => {
            const res = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.itemId}`,
            );
            const data = await res.json();
            return data.meals[0];
          },
        }
      ]);

      return (
        <AppContext.Provider value={{
          userData,
          setUserData,
          isLight,
          setIsLight,
        }}>
            <RouterProvider router={router}/>
        </AppContext.Provider>
      );
}
