import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProductList />,
    },
    {
      path: '/product-details/:productId', // Dynamic route parameter
      element: <ProductDetails />,
    },
    {
        path: '*', // Dynamic route parameter
        element: <NotFoundPage />,
      },
  ]);

const App = ()=>{
    return <RouterProvider router={router}/>    
    }
    export default App;