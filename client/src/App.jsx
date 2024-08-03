import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Acceuil from './Pages/Acceuil'
import Navbar from './Composants/Navbar'
import Footer from './Composants/Footer'
import DetailsProjet from './Pages/DetailsProjet'
import Parcours from './Pages/Parcours'
import Competences from './Pages/Competences'
import Projet from './Pages/Projet'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Acceuil />} />
          <Route path='/parcours' element={<Parcours />} />
          <Route path='/competences' element={<Competences />} />
          <Route path='/projets' element={<Projet />} />
          <Route path='/projet/:id' element={<DetailsProjet />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
