import React from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Browse from './pages/browse/Browse';
import Create from './pages/create/Create';
import Account from './pages/account/Account';
import MyEvents from './pages/myevents/MyEvents';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Footer from './components/footer/Footer';
import Event from './pages/event/Event';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  console.log("in the app component")
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/create' element={<Create />} />
          <Route path='/account' element={<Account />} />
          <Route path='/myevents' element={<MyEvents />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/event/:eventId' element={<Event />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
