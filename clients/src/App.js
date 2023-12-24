import './App.css';
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftSideBar/DrawerSidebar';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import CreateEditChannel from './Pages/Channel/CreateEditChannel';
import { useDispatch } from 'react-redux';
import { fetchAllChannel } from './actions/channelUsers';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideos } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllChannel());
    dispatch(getAllVideos());
    dispatch(getAlllikedVideo);
  },[dispatch]);

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

    const [vidUploadPage, setVidUploadPage] = useState(false);
    const [EditCreateChannelBtn, setEditCreateChannelBtn] = useState(false);

  return (
    <Router>
      {vidUploadPage && <VideoUpload  setVidUploadPage={setVidUploadPage}/>}
      
      {
        EditCreateChannelBtn &&(
      <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn}/>
      )}
      <Navbar
        setEditCreateChannelBtn={setEditCreateChannelBtn}
        toggleDrawer={toggleDrawer}
      />
      {
        <DrawerSidebar
          toggleDrawer={toggleDrawer}
          toggleDrawerSidebar={toggleDrawerSidebar}
        />
      }
      <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn}/>
    </Router>
  );
}

export default App;
