
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import Signup from './Components/Login/SignUp';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import NotFound from './Components/NotFound/NotFound';
import Purchase from './Components/Purchase/Purchase';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
     <Route path="/home" element={<Home />}></Route>
     <Route path="/" element={<Home />}></Route>
    <Route path='/purchase/:id' element={
      <RequireAuth>
         <Purchase></Purchase>
      </RequireAuth>
    }></Route>
   
     <Route path='*' element={<NotFound></NotFound>}></Route>
     <Route path='/my-portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
     <Route path='/blogs' element={<Blog></Blog>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path="/signup" element={<Signup />}></Route>

     
     </Routes>
    </div>
  );
}

export default App;
