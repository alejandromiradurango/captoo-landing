import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/layouts/Layout'
import { Landing, Thanks } from './pages'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />}/>
          <Route path='gracias' element={<Thanks />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App