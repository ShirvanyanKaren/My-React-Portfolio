import './style/App.scss'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import AppPar from './components/Particles';
import Footer from './components/Footer';

function Page () {
  return (
    <>
     <AppPar />
     
    </>
  )
}
function App() {

    return (
      
      <>
            
        <div className='App'>
          <Page className="particles"/>
        <Nav />
       
        <Outlet />

       
        </div>

      </>
    );
  }
  
  export default App;