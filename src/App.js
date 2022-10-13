import './App.css';
import Signup from './page/authentication/signup/Signup'
import Login from './page/authentication/login/Login'
import { Route, Routes, Navigate } from 'react-router-dom';
import CompanyProfile from './page/company/CompanyProfile';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <>
    <Routes>
      <Route path='/company/profile/:id' element={ < PrivateRoute><CompanyProfile/></PrivateRoute>} />
      <Route path='/login' element={< Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="*"  element={ < Navigate to="/login" />} ></Route>
    </Routes>
    </>
  );
}

export default App;
