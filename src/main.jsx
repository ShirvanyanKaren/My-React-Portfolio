import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

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
        },
        
      ],
    },
  ]);
  
  // Render the RouterProvider component
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );