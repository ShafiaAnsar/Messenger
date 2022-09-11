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
        {/* <Navbar /> */}
          <Route   path="/"element={<Navbar/>}/>
          <Route  path="/register"element={<Register/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/profile" element={<Profile/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
