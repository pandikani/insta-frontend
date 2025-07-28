import LoginPage from './components/LoginPage'
import DetailsPage from './components/DetailsPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  )
}

export default App
