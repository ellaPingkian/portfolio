import { Routes, Route} from 'react-router-dom';
// import Logo from '../src/assets/images/logo.png'
import Homepage from './pages/Homepage';
import Works from './pages/Works';
import AboutMe from './pages/AboutMe';
import CautionPage from './pages/CautionPage';
import Navbar from './components/global/Navbar';
import NomoSpaceProject from './pages/projects/NomoSpaceProject';

function App() {

  return (
    <>
      <div className='flex flex-col overflow-x-hidden overflow-y-auto bg-bg'>
        {/* add overflow-x-hidden */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/works' element={<Works />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/page-not-found' element={<CautionPage />} />
          <Route path='/projects/nomo-studio' element={<NomoSpaceProject />} />
          <Route path='/projects/bohol-website-redesign' element={<CautionPage />} />

        </Routes>
      </div>
    </>
  )
}

export default App
