import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Acceuil from './Pages/Acceuil'
import Navbar from './Composants/Navbar'
import Footer from './Composants/Footer'
import DetailsProjet from './Pages/DetailsProjet'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Acceuil />} />
          <Route path='/projet/:id' element={<DetailsProjet />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
