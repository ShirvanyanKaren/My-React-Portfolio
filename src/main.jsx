import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,  
      children: [
        {
          index: true,
          element: <About/>,
        },
        {
          path: '/Poerfolio',
    
          element: <About/>,
        },
        {
          path: '/Home',
          element: < Home/>,
        },
        {
          path: '/Contact',
          element: < Contact/>
        }
      ],
    },
  ]);
  
  // Render the RouterProvider component
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );