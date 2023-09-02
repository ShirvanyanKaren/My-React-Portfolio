import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

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
          path: '/Portfolio',
          element: <Portfolio/>,
        },
        {
          path: '/Resume',
          element: < Resume/>,
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