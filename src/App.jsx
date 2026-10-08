import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ZegoClaude from './components/ZegoClaude'
import VideoRoom from './components/VideoRoom'


const App = () => {
  return (
    <BrowserRouter>
            <Routes>
              <Route path='/' element={<ZegoClaude/>}/>
               <Route path='/room/:roomId' element={<VideoRoom/>}/>
            </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
