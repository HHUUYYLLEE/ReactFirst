import TopBar from './Components/TopBar/TopBar'
import logo from './logo.svg'
import PostDetailsContainer from './Components/Pages/PostDetailsContainer/PostDetailsContainer'
import Write from './Components/Pages/Write/Write'
import Settings from './Components/Pages/Settings/Settings'
import Homepage from './Components/Pages/Homepage/Homepage'
import bgm from '../src/Asset/bg.mp3'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <Router>
      <audio id='audio' loop autoplay>
        <source src={bgm} type='audio/mpeg' />
      </audio>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/write' element={<Write />} />
        <Route path='/post/:postId' element={<PostDetailsContainer />} />
      </Routes>
    </Router>
  )
}

export default App
