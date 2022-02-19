// Imports
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import NavBar from './Components/HomePage/NavigationBar/NavBar';
import ShowRoom from './Components/HomePage/ShowRoom/ShowRoom';
import SideBar from './Components/HomePage/SideBar/SideBar';
import { carInfos } from './data/productsList';

// App Component

function App() {
  // State Management
  const [sideBarState, setSideBarState] = useState(false);

  // State Switching Function
  const toggleSideBar = () => {
    setSideBarState(!sideBarState);
  };
  // JSX
  return (
    <Router>
      <div className="app">
        <Header>
          <NavBar
            sideBarState={sideBarState}
            toggleSideBar={toggleSideBar}
          ></NavBar>
          {carInfos.map((carInfo) => {
            return <ShowRoom key={carInfo.id} {...carInfo}></ShowRoom>;
          })}
        </Header>
        <SideBar
          sideBarState={sideBarState}
          toggleSideBar={toggleSideBar}
        ></SideBar>
      </div>
    </Router>
  );
}

export default App;

const Header = styled.div``;
