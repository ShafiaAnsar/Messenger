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
        <Navbar />
        <Routes>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
