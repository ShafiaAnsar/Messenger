import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthProvider from './context/auth';
// import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
function App() {
    return (
      <AuthProvider>
      <BrowserRouter>
      
        <Routes>
          <Route exact path='/' element={<> <Navbar/><Home/></>} />
          <Route  path="/register"element={<><Navbar/><Register/></>} />
          <Route  path="/login" element={<><Navbar/><Login/></>} />
          <Route  path="/profile" element={<><Navbar/><Profile/></>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
