import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import EditProfile from './components/EditProfile';
import { navLinks, projectsInfo } from './data';
import './App.css';


const App = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "niko",
    lastName: "karlaevi",
    position: "frontend",
    age:"20",
    about:"Sed ut perspiciatis unde omnis"
  })
  const [projects, setProjects] = useState([...projectsInfo])
  const [currentProjectId, setCurrentProjectId] = useState()

  function findCurrentProject() {
    return projects.find(project => {
      return project.id === currentProjectId
    }) || 0
  }

  return (
    <>
      <div className="App">
        <Header navLinks={navLinks}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route 
            path="/projects" 
            element={
              <Projects 
                projects={projects}
                currentProject={findCurrentProject()}
                setCurrentProjectId={setCurrentProjectId}
              />
            } 
          />
          <Route 
            path='/profile/:edit-profile' 
            element={
              <EditProfile 
                userInfo={userInfo} 
                setUserInfo={setUserInfo}
              />
            } 
          />
          <Route path="/profile" element={<Profile userInfo={userInfo} />} />
          <Route parh="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App;