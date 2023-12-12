import './App.css';
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftSideBar/DrawerSidebar';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useState } from 'react';
import CreateEditChannel from './Pages/Channel/CreateEditChannel';

function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
    })
    const toggleDrawer=()=>{
      if(toggleDrawerSidebar.display === "none"){
        setToggleDrawerSidebar({
          display: "flex",
        });
      } else{
        setToggleDrawerSidebar({
          display: "none",
        });
      }
    }
    const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);

  return (
    <Router>
      {
        EditCreateChanelBtn &&
      <CreateEditChannel setEditCreateChanelBtn={setEditCreateChanelBtn}/>
      }
      <Navbar
        setEditCreateChanelBtn={setEditCreateChanelBtn}
        toggleDrawer={toggleDrawer}
      />
      {
        <DrawerSidebar
          toggleDrawer={toggleDrawer}
          toggleDrawerSidebar={toggleDrawerSidebar}
        />
      }
      <AllRoutes/>
    </Router>
  );
}

export default App;
