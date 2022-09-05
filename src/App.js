import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/auth';
function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/' element={<Home/>}/>
      </Routes>
      
    </BrowserRouter>
  </AuthProvider>  
    
 
  );
}

export default App;
