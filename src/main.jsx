import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,  
      children: [
        {
          index: true,
          element: <App/>,
        },
        {
          path: '/About',
    
          element: <About/>,
        },
        {
          path: '/Home',
          element: < Home/>,
        },
      ],
    },
  ]);
  
  // Render the RouterProvider component
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );