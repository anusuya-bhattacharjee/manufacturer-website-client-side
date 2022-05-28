
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/Dashboard/MyOrders';
import MyProfile from './Components/Dashboard/MyProfile';
import AddReview from './Components/Dashboard/AddReview';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import Signup from './Components/Login/SignUp';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import NotFound from './Components/NotFound/NotFound';
import Purchase from './Components/Purchase/Purchase';
import Navbar from './Components/Shared/Navbar';
import Payment from './Components/Dashboard/Payment';
import Users from './Components/Dashboard/Users';

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

    <Route path="/dashboard" element={<Dashboard />}>
        <Route path="my-orders" element={<MyOrders />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="payment/:id" element={<Payment />} />
        <Route path="users" element={<Users />} />
        <Route path="add-review" element={<AddReview />} />
      </Route>

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
