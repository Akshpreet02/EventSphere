import React from 'react';
import Header from './components/header/Header';
import { UserContextProvider } from './UserContext';
import Home from './pages/home/Home';
import Browse from './pages/browse/Browse';
import Create from './pages/create/Create';
import Account from './pages/account/Account';
import MyEvents from './pages/myevents/MyEvents';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Footer from './components/footer/Footer';
import Event from './pages/event/Event';
import EditEvent from './pages/edit-event/EditEvent';
import ManageEvents from './pages/manageevents/ManageEvents';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  console.log("in the app component")
  /* Addiing alert for refresh since logged in is stored as a state variable currently*/
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Preventing the default action to trigger the confirmation dialog
      event.preventDefault();
      // Chrome requires returnValue to be set
      event.returnValue = 'IF YOU REFRESH YOU WILL BE REQUIRED TO SIGN IN AGAIN.';
    };

    // Adding the event listener when the component mounts
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Removing the event listener when the component unmounts
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);


  return (
    <UserContextProvider>
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/browse' element={<Browse />} /> */}
          <Route path='/create' element={<Create />} />
          <Route path='/account' element={<Account />} />
          <Route path='/myevents' element={<MyEvents />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/event/:eventId' element={<Event />} />
          {/* <Route path='/manageevents' element = {<ManageEvents/>} /> */}
          <Route path='/edit-event/:eventId' element={<EditEvent />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    </UserContextProvider>
  )
}

export default App;
