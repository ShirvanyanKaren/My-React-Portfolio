import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'

const router = createBrowserRouter([
    {
      path: '/',
  
      element: <App />,
  
  
    //   children: [
  
    //     {
    //       index: true,
    //       element: < />,
    //     },
    //     {
    //       path: '',
    
    //       element: < />,
    //     },
    //     {
    //       path: 'about',
    //       element: < />,
    //     },
    //   ],
    },
  ]);
  
  // Render the RouterProvider component
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );