import React from 'react';
import './App.scss';
import './assets/scss/header.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
const App = (props) => {
  return (
    <>
      <div className='app-container'>
        <div className='header-container'>
          <Header />

        </div>
        <div className='main-container'>

          <div className='sidenav-container'>

          </div>
          <div className='app-content'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
